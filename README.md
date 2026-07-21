# NextFlows

Hi, this is my Academy MCP project

https://nextflows.ai/academy

# First TypeScript MCP Server

This project implements a simple Model Context Protocol (MCP) server using TypeScript.

The server exposes one tool named `greet`. The tool accepts a user's name and returns a greeting message.

## Features

- Built with TypeScript
- Uses the MCP TypeScript SDK
- Provides one `greet` tool
- Uses Zod for input validation
- Communicates through the stdio transport
- Tested using MCP Inspector

## Tool: `greet`

The `greet` tool accepts one required input:

| Input | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | The name of the person to greet |

### Valid Input

```json
{
  "name": "Saja"
}
```

### Expected Output

```text
Hello, Saja! Welcome to my first MCP server.
```

### Invalid Input Examples

Missing name:

```json
{}
```

Incorrect input type:

```json
{
  "name": 123
}
```

Empty name:

```json
{
  "name": ""
}
```

These inputs are rejected by the Zod input schema.

## Project Structure

```text
mcp-training/
├── src/
│   └── index.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## Requirements

Before running the project, install:

- Node.js version 20 or later
- npm

Check the installed versions:

```bash
node -v
npm -v
```

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/SajaAsfour/mcp-academy-project
```

### 2. Open the Project Folder

```bash
cd mcp-training
```

### 3. Install the Dependencies

```bash
npm install
```

### 4. Run the MCP Server

```bash
npm start
```

The terminal should display:

```text
Greeting MCP server is running on stdio
```

The server will wait for an MCP client to connect. Stop it using `Ctrl + C`.

## How to Test with MCP Inspector

From the project root, run:

```bash
npm run inspect
```

Alternatively, use:

```bash
npx @modelcontextprotocol/inspector npx tsx src/index.ts
```

Then:

1. Wait for MCP Inspector to open in the browser.
2. Select the `STDIO` transport if needed.
3. Click **Connect**.
4. Open the **Tools** tab.
5. Click **List Tools**.
6. Select the `greet` tool.
7. Enter a valid name, such as `Saja`.
8. Click **Run Tool**.
9. Confirm that the greeting message is returned.

To test schema validation, try an empty name, missing name, or non-string value.

## Important stdio Note

The server uses `console.error` for logging because stdout is reserved for MCP protocol messages. Using `console.log` may interfere with the stdio communication.

## Author

Created as part of MCP training by SajaAsfour.