import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db";
import { dashboardPluginWrapper } from "better-auth-dashboard";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  appName: "admin-dashboard-demo",
  plugins: dashboardPluginWrapper([admin()], {}),
});
