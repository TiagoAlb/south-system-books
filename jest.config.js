module.exports = {
    clearMocks: true,
    collectCoverageFrom: [
        "<rootDir>/src/**/*.js"
    ],
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "text",
        "lcov",
        "clover",
        "cobertura"
    ],
    coverageThreshold: {
        global: {
            branches: 50, functions: 40, lines: 40, statements: 40
        }
    },
    moduleFileExtensions: [
        "js",
        "json",
        "jsx"
    ],
    moduleNameMapper: {
        "\\.(css|less|css!)$": "<rootDir>/jest/empty-module.js"
    },
    modulePathIgnorePatterns: [
        "<rootDir>/node_modules/", "<rootDir>/dist/*"
    ],
    setupFiles: [
        "./jest/jest.setup.js"
    ],
    testEnvironment: "node",
    testMatch: [
        "**/__tests__/**/*.js?(x)",
        "<rootDir>/src/**/?(*.)+(spec|test).js?(x)"
    ],
    transform: {
        '.+\\.(css|css!|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
            'jest-transform-stub',
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    transformIgnorePatterns: [
        "/node_modules/"
    ]
}