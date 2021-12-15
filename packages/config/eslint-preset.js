module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/docs/",
        "apps/web/",
        "apps/xpo/",
        "apps/rnative/",
        "packages/ui/",
        "packages/config/",
        "packages/tsconfig/",
      ],
    },
  },
};
