export async function onRequest({ request, env }) {
  const { model, prompt, system } = await request.json();
  const messages = [
    { role: "user", content: prompt },
    { role: "system", content: system },
  ];

  const response = await env.AI.run(model, { messages, stream: true });
  const stream = response
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new SSEToStream())
    .pipeThrough(new TextEncoderStream());

  return new Response(stream, {
    headers: { "content-type": "application/x-ndjson" },
  });
}

class SSEToStream extends TransformStream {
  constructor() {
    super({
      transform: (chunk, controller) => this.processChunk(chunk, controller),
      flush: (controller) => controller.enqueue(this.format({ done: true })),
    });
  }
  processChunk(chunk, controller) {
    chunk.split("data:").forEach((line) => {
      const match = line.match(/{.+?}/);
      if (match) controller.enqueue(this.format(JSON.parse(match[0])));
    });
  }
  format(payload) {
    return JSON.stringify({ done: false, ...payload }) + "\n";
  }
}
