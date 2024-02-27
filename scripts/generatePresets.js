const fs = require("node:fs");
const { traverse } = require("object-traversal");
const designSystemPresets = require("@kickstartds/ds-agency/presets.json");
const generatedComponents = require("../cms/models.json");

const presets = {};

const presetIdToComponentName = (id) =>
  id.split("--").shift().split("-").slice(1).join("-");

const generate = async () => {
  // Create presets
  for (const preset of designSystemPresets) {
    const componentKey = presetIdToComponentName(preset.id).replace("-", "_");
    if (componentKey === "cms") continue;

    presets[componentKey] ||= {
      model: componentKey,
      presets: [],
    };

    presets[componentKey].presets.push({
      label: preset.name,
      thumbnail: `images/${preset.screenshot.replace("img/screenshots/", "")}`,
      metadata: {
        categories: ["Content"],
        canDelete: false,
      },
      data: preset.args,
    });
  }

  // Add component typing where needed
  for (const [componentId, componentPresets] of Object.entries(presets)) {
    const component = generatedComponents.components.find(
      (component) => component.name === componentId
    );

    if (!component) continue;

    for (const { data } of componentPresets.presets) {
      traverse(
        data,
        ({ key, parent, value, meta }) => {
          if (value && typeof value === "object" && meta.nodePath) {
            if (!isNaN(meta.nodePath.split("/").pop())) {
              const pathKey = meta.nodePath.split("/").shift();
              const listField = component.fields.find(
                (field) =>
                  field.name === pathKey &&
                  field.type === "list" &&
                  field.items.type === "model"
              );
              if (listField) {
                parent[key] = {
                  ...parent[key],
                  $$type: listField.items.models[0],
                };
              }
            }
          }
        },
        { pathSeparator: "/" }
      );

      // Make all image references absolute
      traverse(presets, ({ parent, key, value }) => {
        if (value && typeof value === "string" && value.startsWith("img/")) {
          parent[key] = `/${value}`;
        }
      });
    }

    fs.writeFileSync(
      `.stackbit/presets/${componentId}.json`,
      JSON.stringify(componentPresets, null, 2)
    );
  }
};

generate();
