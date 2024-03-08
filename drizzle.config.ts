import type { Config } from "drizzle-kit";

export default {
  schema: "./drizzle/schema",
  driver: "turso",
  dbCredentials: {
    // @ts-ignore
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
  out: "./drizzle/migrations/",
} satisfies Config;
