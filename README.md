# llm-chat

Just a simple HTML UI for Ollama (retrofitted with support for [Cloudflare
Workers AI](https://developers.cloudflare.com/workers-ai/))

> 🍴 Forked from [https://github.com/ollama-ui/ollama-ui](https://github.com/ollama-ui/ollama-ui)

## Set up

```sh
git clone https://github.com/megaconfidence/llm-chat.git
cd llm-chat
npm i
npm run dev

```

Then open [http://localhost:8788/](http://localhost:8788/) in your browser.

## Usage

This UI can be used with locally running Ollama on `http://localhost:11434` or Cloudflare Workers AI.

To use with Cloudflare Workers AI, set the `Hostname` field on the UI to `http://localhost:8788`.

![screenshot1](/screenshot1.jpg?raw=true)

![screenshot2](/screenshot2.jpg?raw=true)
