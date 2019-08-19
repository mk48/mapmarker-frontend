const path = require("path");

module.exports = {
  roots: [path.resolve(__dirname, "./src")],
  displayName: "local",
  testMatch: ["**/__tests__/**/*.js"],
  testURL: "http://localhost",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./src/test-utils/setupTests.js")
  ]
};
