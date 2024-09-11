export function onRequest(_context) {
  const models = [
    { name: "@cf/meta/llama-3.1-8b-instruct" },
    { name: "@hf/mistral/mistral-7b-instruct-v0.2" },
    { name: "@cf/microsoft/phi-2" },
    { name: "@cf/qwen/qwen1.5-14b-chat-awq" },
    { name: "@hf/google/gemma-7b-it" },
  ];
  return Response.json({ models });
}
