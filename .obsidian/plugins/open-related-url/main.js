/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
module.exports = __toCommonJS(main_exports);

// src/open-related-url/OpenRelatedUrlPlugin.ts
var import_obsidian3 = require("obsidian");

// src/resolveFrontMatter.ts
var resolveFrontMatter = (metaDataCache, file) => __async(void 0, null, function* () {
  var _a;
  return (_a = metaDataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
});

// src/open-related-url/extractUrlSet.ts
var defaultSuffix = "Url";
var extractUrlSet = (frontMatter, { urlFrontMatterNameSuffix = defaultSuffix } = {}) => {
  return Object.keys(frontMatter).reduce((urlSet, key) => {
    if (key.endsWith(urlFrontMatterNameSuffix)) {
      return [
        ...urlSet,
        {
          name: key.replace(urlFrontMatterNameSuffix, ""),
          url: frontMatter[key]
        }
      ];
    } else {
      return urlSet;
    }
  }, []);
};

// src/open-related-url/UrlModal.ts
var import_obsidian = require("obsidian");

// src/openUrl.ts
var openUrl = (url) => {
  window.open(url);
};
var openUrl_default = openUrl;

// src/open-related-url/UrlModal.ts
var UrlModal = class extends import_obsidian.FuzzySuggestModal {
  constructor(app2, urlOptions) {
    super(app2);
    this.urlOptions = urlOptions;
  }
  getItems() {
    return this.urlOptions;
  }
  getItemText(item) {
    return item.name;
  }
  onChooseItem(item, evt) {
    openUrl_default(item.url);
  }
};

// src/open-related-url/PluginSettings.ts
var DEFAULT_SETTINGS = {
  quickNavigateNames: [],
  urlFrontMatterNameSuffix: "Url"
};

// src/open-related-url/SettingTab.ts
var import_obsidian2 = require("obsidian");
var SettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app2, plugin) {
    super(app2, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Open related URL settings" });
    new import_obsidian2.Setting(containerEl).setName("Frontmatter Suffix").setDesc("For open-related-url to recognize urls in the front matter, what must key end with?").addText((text) => {
      text.setPlaceholder('usually "Url" or "Address"').setValue(this.plugin.settings.urlFrontMatterNameSuffix).onChange((value) => __async(this, null, function* () {
        this.plugin.settings.urlFrontMatterNameSuffix = value;
        yield this.plugin.saveSettings();
      }));
    });
    new import_obsidian2.Setting(containerEl).setName("Quick Urls").setDesc("Provide a list of urls often found in front matter for quick navigation. You can assign hotkeys to these quick URLs").addText((text) => text.setPlaceholder("(separated by commas)").setValue(this.plugin.settings.quickNavigateNames.join(", ")).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.quickNavigateNames = value.split(",").map((name) => name.trim());
      yield this.plugin.saveSettings();
    })));
  }
};

// src/open-related-url/OpenRelatedUrlPlugin.ts
var OpenRelatedUrlPlugin = class extends import_obsidian3.Plugin {
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      const { urlFrontMatterNameSuffix } = this.settings;
      this.addCommand({
        id: "open-related-url",
        name: "Open Related URL",
        editorCallback: (editor, view) => __async(this, null, function* () {
          const frontMatter = yield resolveFrontMatter(app.metadataCache, view.file);
          if (frontMatter) {
            const urlSet = extractUrlSet(frontMatter, {
              urlFrontMatterNameSuffix
            });
            new UrlModal(this.app, urlSet).open();
          }
        })
      });
      this.settings.quickNavigateNames.forEach((name) => {
        this.addCommand({
          id: `open-quick-url-${name}`,
          name: `Quick Nav - ${name}`,
          editorCallback: (editor, view) => __async(this, null, function* () {
            const frontMatter = yield resolveFrontMatter(app.metadataCache, view.file);
            let urlItem;
            if (frontMatter) {
              const urlSet = extractUrlSet(frontMatter, {
                urlFrontMatterNameSuffix
              });
              urlItem = urlSet.find((url) => url.name === name);
            }
            if (urlItem) {
              openUrl_default(urlItem.url);
            } else {
              new import_obsidian3.Notice(`URL for ${name} not found in frontmatter`);
            }
          })
        });
      });
      this.addSettingTab(new SettingTab(this.app, this));
    });
  }
  onunload() {
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};

// src/main.ts
var main_default = OpenRelatedUrlPlugin;
