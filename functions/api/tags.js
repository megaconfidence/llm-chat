export function onRequest(context) {
  const models = [
    { name: "@cf/meta/llama-3.1-8b-instruct" },
    { name: "@hf/mistral/mistral-7b-instruct-v0.2" },
  ];
  return Response.json({ models });
}
