module.exports = {
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy",
    },
    transform: {
        "\\.(js|jsx|ts|tsx)$": [
            "babel-jest",
            {
                configFile: "./babel.config.jest.js",
            },
        ],
    },
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
