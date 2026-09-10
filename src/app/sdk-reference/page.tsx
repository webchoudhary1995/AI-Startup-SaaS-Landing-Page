import PageShell from "../components/PageShell";

const sdks = [
  {
    lang: "Node.js / TypeScript",
    version: "v2.4.1",
    install: "npm install @neuralai/sdk",
    badge: "TS",
    grad: "from-yellow-500 to-amber-400",
    code: `import NeuralAI from "@neuralai/sdk";

const client = new NeuralAI({ apiKey: process.env.NEURAL_API_KEY });

// Generate text
const result = await client.generate({
  model: "neural-gpt-4-turbo",
  prompt: "Explain REST APIs in one sentence",
  maxTokens: 100,
});

console.log(result.text);

// Streaming
const stream = await client.generate({
  model: "neural-gpt-4-turbo",
  prompt: "Write a poem about the ocean",
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.delta);
}`,
  },
  {
    lang: "Python",
    version: "v2.4.0",
    install: "pip install neuralai",
    badge: "Py",
    grad: "from-blue-500 to-cyan-400",
    code: `from neuralai import NeuralAI
import os

client = NeuralAI(api_key=os.environ["NEURAL_API_KEY"])

# Generate text
result = client.generate(
    model="neural-gpt-4-turbo",
    prompt="Explain REST APIs in one sentence",
    max_tokens=100,
)
print(result.text)

# Async + streaming
import asyncio

async def stream():
    async with client.generate_stream(
        model="neural-gpt-4-turbo",
        prompt="Write a poem about the ocean",
    ) as s:
        async for chunk in s:
            print(chunk.delta, end="", flush=True)

asyncio.run(stream())`,
  },
  {
    lang: "Go",
    version: "v1.2.0",
    install: "go get github.com/neuralai/neuralai-go",
    badge: "Go",
    grad: "from-cyan-500 to-sky-400",
    code: `package main

import (
  "context"
  "fmt"
  "os"

  neuralai "github.com/neuralai/neuralai-go"
)

func main() {
  client := neuralai.NewClient(os.Getenv("NEURAL_API_KEY"))

  result, err := client.Generate(context.Background(),
    &neuralai.GenerateParams{
      Model:     "neural-gpt-4-turbo",
      Prompt:    "Explain REST APIs in one sentence",
      MaxTokens: 100,
    },
  )
  if err != nil {
    panic(err)
  }
  fmt.Println(result.Text)
}`,
  },
  {
    lang: "Rust",
    version: "v1.0.0",
    install: 'neuralai = "1.0"  # Cargo.toml',
    badge: "Rs",
    grad: "from-orange-500 to-red-400",
    code: `use neuralai::{Client, GenerateParams};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let client = Client::from_env()?; // reads NEURAL_API_KEY

    let result = client
        .generate(GenerateParams {
            model: "neural-gpt-4-turbo".into(),
            prompt: "Explain REST APIs in one sentence".into(),
            max_tokens: Some(100),
            ..Default::default()
        })
        .await?;

    println!("{}", result.text);
    Ok(())
}`,
  },
];

export default function SdkReferencePage() {
  return (
    <PageShell
      badge="Developers"
      title="SDK"
      titleAccent="Reference"
      subtitle="Official client libraries for Node.js, Python, Go, and Rust. All SDKs are open-source and actively maintained."
    >
      <div className="flex flex-col gap-10">
        {sdks.map((sdk) => (
          <div key={sdk.lang} className="glass-card overflow-hidden">
            {/* Header */}
            <div className="flex flex-wrap items-center gap-3 px-6 py-4 border-b border-slate-800">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${sdk.grad} flex items-center justify-center text-white text-xs font-black`}>
                {sdk.badge}
              </span>
              <h3 className="text-base font-bold text-white">{sdk.lang}</h3>
              <span className="text-xs text-slate-500 font-mono">{sdk.version}</span>
              <code className="ml-auto text-xs font-mono bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300 hidden sm:block">
                {sdk.install}
              </code>
            </div>
            {/* Mobile install */}
            <div className="px-6 py-3 border-b border-slate-800 sm:hidden">
              <code className="text-xs font-mono text-slate-300">{sdk.install}</code>
            </div>
            {/* Code */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
                <code>{sdk.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
