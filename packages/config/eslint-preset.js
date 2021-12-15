module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/docs/",
        "apps/web/",
        "apps/expo-app/",
        "packages/ui/",
        "packages/config/",
        "packages/tsconfig/",
      ],
    },
  },
};
