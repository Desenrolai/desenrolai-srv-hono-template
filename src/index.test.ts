import { describe, it, expect } from "vitest";
import { app } from "./index.js";

describe("health", () => {
  it("GET /health returns 200 with status ok", async () => {
    const res = await app.request("/health");
    expect(res.status).toBe(200);
    const body = await res.json() as Record<string, string>;
    expect(body.status).toBe("ok");
  });
});
