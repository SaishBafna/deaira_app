export const testEnvironment = "jsdom";
export const transform = {
    "^.+\\.(js|jsx)$": "babel-jest"
};
export const moduleFileExtensions = ["js", "jsx"];
export const setupFilesAfterEnv = ["@testing-library/jest-dom"];
export const transformIgnorePatterns = [
    "/node_modules/"
];
