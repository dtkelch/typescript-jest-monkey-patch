module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },

  // Run these files after jest has been
  // installed in the environment
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
