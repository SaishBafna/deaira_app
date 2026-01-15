export const testEnvironment = "jsdom";

export const transform = {
  "^.+\\.(js|jsx)$": "babel-jest"
};

export const moduleFileExtensions = ["js", "jsx"];

// Add these two ⬇
export const setupFiles = ["./jest.polyfills.js"];
export const setupFilesAfterEnv = ["@testing-library/jest-dom"];

export const transformIgnorePatterns = [
  "/node_modules/"
];
