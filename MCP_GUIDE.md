# MCP (Model Context Protocol) Guide

## 📋 Tổng quan

MCP cho phép AI assistants (như Claude) tương tác trực tiếp với Playwright để chạy tests, debug, và tạo tests mới.

## 🚀 Cài đặt

```bash
npm install --save-dev @executeautomation/playwright-mcp-server
```

## 🔧 Cấu hình

### Claude Desktop

Thêm vào `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    }
  }
}
```

### Cursor/VS Code

Thêm vào settings nếu hỗ trợ MCP.

## 💬 Cách sử dụng

### Chạy Tests
- "Run all authentication tests"
- "Run the register user test"
- "Debug the login test"

### Xem Results
- "Show me test results from last run"
- "What tests failed?"

### Tạo Tests
- "Create a test for user registration"
- "Add a test for product search"

## 📚 Resources

- MCP Documentation: https://modelcontextprotocol.io
- Playwright MCP Server: `@executeautomation/playwright-mcp-server`

