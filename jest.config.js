/** @type {import('jest').Config} */
export default {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { isolatedModules: true }],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^~/(.+)": "<rootDir>/src/$1",
  },
  setupFiles: ["./src/test/matchMediaSetup.ts", "whatwg-fetch"],
  setupFilesAfterEnv: ["./src/test/serverSetup.ts", "./src/test/querySetup.ts"],
};
