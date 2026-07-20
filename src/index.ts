import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";

function createServer(): McpServer {
  const server = new McpServer({
    name: "greeting-server",
    version: "1.0.0",
  });

  server.registerTool(
    "greet",
    {
      description: "Greets a user by name",
      inputSchema: z.object({
        name: z
          .string()
          .min(1)
          .describe("The name of the person to greet"),
      }),
    },
    async ({ name }) => {
      return {
        content: [
          {
            type: "text",
            text: `Hello, ${name}! Welcome to my first MCP server.`,
          },
        ],
      };
    }
  );

  return server;
}

void serveStdio(createServer);

console.error("Greeting MCP server is running on stdio");