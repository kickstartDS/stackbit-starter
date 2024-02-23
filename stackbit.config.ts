import { Model, defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";
import * as jsonModels from "./cms/models.json";

const config = defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: (jsonModels.components as Model[]).concat({
        name: "page",
        type: "page",
        label: "Page",
        urlPath: "/{slug}",
        filePath: "content/pages/{slug}.md",
        fields: [
          { name: "title", type: "string", required: true },
          {
            type: "list",
            name: "sections",
            label: "Sections",
            items: {
              type: "model",
              models: ["section"],
            },
          },
        ],
      }),
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/",
      },
    }),
  ],
  // presetSource: {
  //   type: "files",
  //   presetDirs: ["./.stackbit/presets"],
  // },
  styleObjectModelName: "ThemeStyle",
});
export default config;
