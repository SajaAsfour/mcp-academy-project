import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";

const server = new McpServer({
  name: "saja-asfour-mcp-server",
  version: "1.1.0",
});

server.registerTool(
  "greet",
  {
    description: "Greets a person by the entered name",
    inputSchema: z.object({
      name: z
        .string()
        .min(1)
        .describe("The full name of the person to greet"),
    }),
  },
  async ({ name }) => ({
    content: [
      {
        type: "text",
        text: `Hello, ${name}!`,
      },
    ],
  })
);

server.registerTool(
  "introduce_me",
  {
    description: "Introduces a person using their name and specialization",
    inputSchema: z.object({
      name: z
        .string()
        .min(1)
        .describe("The full name of the person"),

      specialization: z
        .string()
        .min(1)
        .describe("The person's specialization or field"),
    }),
  },
  async ({ name, specialization }) => ({
    content: [
      {
        type: "text",
        text: `My name is ${name}, and my specialization is ${specialization}.`,
      },
    ],
  })
);

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error("Saja Asfour MCP server is running on stdio");
}

main().catch((error: unknown) => {
  console.error("Server error:", error);
  process.exit(1);
});