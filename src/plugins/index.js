module.exports = (on, config) => {
    return {
        ...config,
        baseUrl: "https://js.staging.practicumfit.com",
        fixturesFolder: "src/fixtures",
        integrationFolder: "src/integration",
        screenshotsFolder: "output/screenshots",
        supportFile: "src/support/index.js",
        video: true,
        videosFolder: "output/videos",
        // videoCompression: false,
        watchForFileChanges: false,
        defaultCommandTimeout: 10000,
        numTestsKeptInMemory: 0,
        ...(config.overrides || {})
    }
};