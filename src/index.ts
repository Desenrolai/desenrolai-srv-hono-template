import { Hono } from "hono";
import { serve } from "@hono/node-server";

export const app = new Hono();

app.get("/health", (c) => c.json({ status: "ok" }));

export function startServer(): void {
  serve({ fetch: app.fetch, port: 3000 }, (info) => {
    console.log("Server running on port " + String(info.port));
  });
}
