export default {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!src/themes/Theme.tsx",
    "!src/App.tsx",
    "!src/index.tsx",
    "!src/Constants.tsx",
    "!src/api-service/**/*.{ts,tsx}",
    "!src/Store.tsx",
    "!src/components/molecules/progressbar/progressbar.tsx",
    "!src/components/organisms/filter/Filter.tsx",
    "!cypress",
  ],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/fileTransform.js",
  },
  resetMocks: true,
};
