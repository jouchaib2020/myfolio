export default {
  serverBuildTarget: "cloudflare-workers", // or 'browser'
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
};
