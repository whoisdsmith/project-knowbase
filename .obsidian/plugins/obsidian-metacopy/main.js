var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
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

// metacopy/main.ts
__export(exports, {
  default: () => MetaCopy
});
var import_obsidian5 = __toModule(require("obsidian"));

// metacopy/settings.ts
var import_obsidian2 = __toModule(require("obsidian"));

// metacopy/i18n/index.ts
var import_obsidian = __toModule(require("obsidian"));

// metacopy/i18n/locales/en-us.ts
var en_us_default = {
  metaCopySettings: "MetaCopy Settings",
  keyTitleSetting: "Key",
  keyTitleDesc: "The key which you want to copy the value",
  keyTitlePlaceholder: "key1, key2, key3,\u2026",
  linkCreatorHeader: "Link Creator",
  baseLink: "Base link",
  baseLinkDesc: "The base of the link",
  defaultBehavior: "Default behavior",
  defaultBehaviorDesc: "Choose between a metadata key, obsidian path & fixed folder for the link creator",
  fixedFolder: "Fixed Folder",
  categoryKey: "Metadata Key",
  obsidianPath: "Obsidian Path",
  keyLink: "Key link",
  keyLinkDesc: "The key to create as link",
  defaultValue: "Default value",
  defaultValueDesc: "If you want to active the link creation without the key set.",
  folderNote: "Folder note",
  folderNoteDesc: "If the file name = key link or parent folder, remove the file name in the link",
  disableMetaCopy: "Disable MetaCopy",
  disableMetaCopyDesc: "Disable Metacopy context menu with a frontmatter key.",
  disableMetaCopyDescURL: "Also disable the URL creation in command modal.",
  menuBehavior: "Menu behavior",
  menuBehaviorDesc: "Enable : require a configured key to enable the menu",
  keyMenu: "Key menu",
  keyMenuDesc: "The key used to disable/enable the metacopy file menu",
  useFrontMatterTitle: "Use frontmatter title",
  useFrontMatterTitleDesc: 'Use frontmatter "title" field instead of the file name.',
  metadataMessage: (key) => `Metadata key "${key}" copied to the clipboard.`,
  metadataMessageURL: "URL send to the clipboard."
};

// metacopy/i18n/locales/fr-fr.ts
var fr_fr_default = {
  metaCopySettings: "Param\xE8tre MetaCopy",
  keyTitleSetting: "Cl\xE9",
  keyTitleDesc: "La cl\xE9 dont vous voulez copier la valeur",
  keyTitlePlaceholder: "cl\xE91, cl\xE92, cl\xE93,\u2026",
  linkCreatorHeader: "Cr\xE9ateur de lien",
  baseLink: "Base du lien",
  baseLinkDesc: "La base du lien",
  defaultBehavior: "Comportement par d\xE9faut",
  defaultBehaviorDesc: "Choisissez entre une cl\xE9 de m\xE9tadonn\xE9es, le chemin dans Obsidian et un dossier fixe pour le cr\xE9ateur de liens.",
  fixedFolder: "Dossier fixe",
  categoryKey: "Cl\xE9 de m\xE9tadonn\xE9e",
  obsidianPath: "Chemin Obsidian",
  keyLink: "Cl\xE9 de lien",
  keyLinkDesc: "La cl\xE9 pour cr\xE9er le lien",
  defaultValue: "Valeur par d\xE9faut",
  defaultValueDesc: "Si vous voulez activer la cr\xE9ation de liens sans cl\xE9 de m\xE9tadonn\xE9e.",
  folderNote: "Folder Note",
  folderNoteDesc: "Si le nom du fichier = lien cl\xE9 ou dossier parent, supprimer le nom du fichier dans le lien",
  disableMetaCopy: "D\xE9sactiver MetaCopy",
  disableMetaCopyDesc: "D\xE9sactiver le menu contextuel de Metacopy avec une cl\xE9 de m\xE9tadonn\xE9e.",
  disableMetaCopyDescURL: "D\xE9sactive \xE9galement la cr\xE9ation d'URL dans la commande.",
  menuBehavior: "Comportement du menu",
  menuBehaviorDesc: "Activer : n\xE9cessite une cl\xE9 configur\xE9e pour activer le menu",
  keyMenu: "Cl\xE9 du menu",
  keyMenuDesc: "La cl\xE9 utilis\xE9e pour d\xE9sactiver/activer le menu du fichier Metacopy.",
  useFrontMatterTitle: 'Utiliser la cl\xE9 de m\xE9tadonn\xE9e "title"',
  useFrontMatterTitleDesc: 'Utiliser la cl\xE9 de m\xE9tadonn\xE9e "title" (au lieu du nom du fichier) pour cr\xE9er le lien.',
  metadataMessage: (key) => `Cl\xE9 de m\xE9tadonn\xE9e "${key}" copi\xE9e dans le presse-papier`,
  metadataMessageURL: "URL envoy\xE9 dans le presse-papier"
};

// metacopy/i18n/index.ts
var localeMap = {
  enUS: en_us_default,
  "fr": fr_fr_default
};
var locale = localeMap[import_obsidian.moment.locale()];
function t(str) {
  return locale && locale[str] || en_us_default[str];
}

// metacopy/settings.ts
var DEFAULT_SETTINGS = {
  copyKey: "",
  baseLink: "",
  keyLink: "",
  comport: false,
  disableKey: "",
  folderNote: false,
  defaultKeyLink: "",
  behaviourLinkCreator: "categoryKey",
  useFrontMatterTitle: false
};
var CopySettingsTabs = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    function showSettings(containerEl2) {
      containerEl2.descEl.show();
      containerEl2.nameEl.show();
      containerEl2.controlEl.show();
    }
    function hideSettings(containerEl2) {
      containerEl2.descEl.hide();
      containerEl2.nameEl.hide();
      containerEl2.controlEl.hide();
    }
    containerEl.empty();
    containerEl.createEl("h2", { text: t("metaCopySettings") });
    new import_obsidian2.Setting(containerEl).setName(t("keyTitleSetting")).setDesc(t("keyTitleDesc")).addTextArea((text) => text.setPlaceholder(t("keyTitlePlaceholder")).setValue(this.plugin.settings.copyKey).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.copyKey = value;
      yield this.plugin.saveSettings();
    })));
    containerEl.createEl("h3", { text: t("linkCreatorHeader") });
    new import_obsidian2.Setting(containerEl).setName(t("baseLink")).setDesc(t("baseLinkDesc")).addText((text) => text.setPlaceholder("https://obsidian-file.github.io/").setValue(this.plugin.settings.baseLink).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.baseLink = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian2.Setting(containerEl).setName(t("defaultBehavior")).setDesc(t("defaultBehaviorDesc")).addDropdown((dropdown) => dropdown.addOptions({
      fixedFolder: t("fixedFolder"),
      categoryKey: t("categoryKey"),
      obsidianPath: t("obsidianPath")
    }).setValue(this.plugin.settings.behaviourLinkCreator).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.behaviourLinkCreator = value;
      if (value === "categoryKey") {
        showSettings(keyLinkSettings);
      } else if (value === "fixedFolder") {
        hideSettings(folderNoteSettings);
        hideSettings(keyLinkSettings);
      } else {
        hideSettings(keyLinkSettings);
        showSettings(folderNoteSettings);
      }
      yield this.plugin.saveSettings();
    })));
    const keyLinkSettings = new import_obsidian2.Setting(containerEl).setName(t("keyLink")).setDesc(t("keyLinkDesc")).setClass("metacopy-settings").addText((text) => text.setPlaceholder("").setValue(this.plugin.settings.keyLink).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.keyLink = value;
      yield this.plugin.saveSettings();
    })));
    if (this.plugin.settings.behaviourLinkCreator === "categoryKey") {
      showSettings(keyLinkSettings);
    } else {
      hideSettings(keyLinkSettings);
    }
    new import_obsidian2.Setting(containerEl).setName(t("defaultValue")).setDesc(t("defaultValueDesc")).addText((text) => text.setPlaceholder("").setValue(this.plugin.settings.defaultKeyLink).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.defaultKeyLink = value;
      yield this.plugin.saveSettings();
    })));
    const folderNoteSettings = new import_obsidian2.Setting(containerEl).setName(t("folderNote")).setDesc(t("folderNoteDesc")).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.folderNote);
      toggle.onChange((value) => __async(this, null, function* () {
        this.plugin.settings.folderNote = value;
        yield this.plugin.saveSettings();
      }));
    });
    new import_obsidian2.Setting(containerEl).setName(t("useFrontMatterTitle")).setDesc(t("useFrontMatterTitleDesc")).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.useFrontMatterTitle);
      toggle.onChange((value) => __async(this, null, function* () {
        this.plugin.settings.useFrontMatterTitle = value;
        yield this.plugin.saveSettings();
      }));
    });
    if (this.plugin.settings.behaviourLinkCreator === "fixedFolder") {
      hideSettings(folderNoteSettings);
    } else {
      showSettings(folderNoteSettings);
    }
    containerEl.createEl("h3", { text: t("disableMetaCopy") });
    containerEl.createEl("p", {
      text: t("disableMetaCopyDesc")
    });
    containerEl.createEl("p", {
      text: t("disableMetaCopyDescURL")
    });
    new import_obsidian2.Setting(containerEl).setName(t("menuBehavior")).setDesc(t("menuBehaviorDesc")).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.comport);
      toggle.onChange((value) => __async(this, null, function* () {
        this.plugin.settings.comport = value;
        yield this.plugin.saveSettings();
      }));
    });
    new import_obsidian2.Setting(containerEl).setName(t("keyMenu")).setDesc(t("keyMenuDesc")).addText((text) => text.setPlaceholder("").setValue(this.plugin.settings.disableKey).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.disableKey = value;
      yield this.plugin.saveSettings();
    })));
  }
};

// metacopy/modal.ts
var import_obsidian4 = __toModule(require("obsidian"));

// metacopy/src/utils.ts
var import_obsidian3 = __toModule(require("obsidian"));

// metacopy/src/pluginBehavior.ts
function disableMetaCopy(app, settings, file) {
  const toggle = settings.comport;
  const fileCache = app.metadataCache.getFileCache(file);
  const meta = fileCache == null ? void 0 : fileCache.frontmatter;
  if (toggle) {
    if (meta === void 0) {
      return false;
    } else
      return !!meta[settings.disableKey];
  } else {
    if (meta === void 0) {
      return false;
    } else
      return !meta[settings.disableKey];
  }
}

// metacopy/src/metadata.ts
function getMeta(app, file, settings) {
  var _a;
  const meta = (_a = app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
  if (meta === void 0) {
    return null;
  }
  let linkValue = "";
  let metaKey = "";
  if (settings) {
    const keyMeta = settings.copyKey.replace(" ", ",").replace(",,", ",");
    const listKey = keyMeta.split(",");
    metaKey = keyMeta;
    if (listKey.length > 1) {
      for (let i = 0; i < listKey.length; i++) {
        if (meta[listKey[i]] !== void 0) {
          linkValue = meta[listKey[i]].trim();
          metaKey = listKey[i].trim();
          break;
        }
      }
    } else {
      linkValue = meta[listKey[0]];
      metaKey = listKey[0];
    }
  }
  const metaKeys = {
    key: metaKey,
    value: linkValue
  };
  if (!linkValue && settings.defaultKeyLink) {
    return {
      key: "DefaultKey",
      value: settings.defaultKeyLink
    };
  }
  return metaKeys;
}
function checkMeta(app, settings) {
  const file = app.workspace.getActiveFile();
  const meta = getMeta(app, file, settings);
  let checkKey = false;
  checkKey = (meta == null ? void 0 : meta.key) === "DefaultKey" || (meta == null ? void 0 : meta.key) === "Copy link";
  return !!file && checkKey;
}
function getAllMeta(app, file, settings) {
  const metaValue = [];
  const frontmatter = app.metadataCache.getCache(file.path).frontmatter;
  const keyMeta = settings.copyKey.replace(" ", ",").replace(",,", ",");
  let listKey = keyMeta.split(",");
  listKey = listKey.map((x) => x.trim());
  if (listKey.length > 0) {
    for (let i = 0; i < listKey.length; i++) {
      if (frontmatter[listKey[i]]) {
        metaValue.push(frontmatter[listKey[i].trim()]);
      }
    }
  }
  let mappedListKey = listKey.map((key, i) => ({
    key,
    value: metaValue[i]
  }));
  mappedListKey = JSON.parse(JSON.stringify(mappedListKey));
  Object.entries(mappedListKey).forEach(([k, v]) => {
    if (v.value === void 0) {
      mappedListKey.remove(v);
    }
  });
  const enableMetaCopy = disableMetaCopy(app, settings, file);
  if (enableMetaCopy && settings.defaultKeyLink) {
    mappedListKey[mappedListKey.length] = {
      key: "Copy link",
      value: settings.defaultKeyLink
    };
  }
  return mappedListKey;
}

// metacopy/src/utils.ts
function createLink(file, settings, metaCopy, app) {
  var _a;
  let url = metaCopy.value;
  const folderPath = checkSlash(url).replace(/(^\/|\/$)/, "");
  const folder = folderPath.split("/").slice(-1)[0];
  if (settings) {
    let baseLink = settings.baseLink;
    baseLink = checkSlash(baseLink);
    const folderNote = settings.folderNote;
    let fileName = file.name.replace(".md", "");
    if (settings.useFrontMatterTitle) {
      const meta = (_a = app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
      if (meta && meta["title"] && meta["title"] !== file.name) {
        fileName = meta["title"];
      }
    }
    if (settings.behaviourLinkCreator === "categoryKey") {
      const keyLink = settings.keyLink;
      if (metaCopy.key === keyLink || metaCopy.key == "DefaultKey" || metaCopy.key == "Copy link") {
        if (fileName === folder && folderNote) {
          fileName = "/";
        } else {
          fileName = "/" + fileName + "/";
        }
        url = baseLink + folderPath + fileName;
        url = encodeURI(url);
      }
    } else if (settings.behaviourLinkCreator === "obsidianPath") {
      const folderPath2 = file.parent.path.replace(/\/$/, "");
      let filename = file.name.replace(".md", "");
      if (filename === file.parent.name && folderNote || folderNote && app.vault.getAbstractFileByPath(file.path.replace(".md", "")) && app.vault.getAbstractFileByPath(file.path.replace(".md", "")) instanceof import_obsidian3.TFolder) {
        filename = "/";
      } else if (file.parent.isRoot()) {
        filename = filename + "/";
      } else {
        filename = "/" + filename + "/";
      }
      url = baseLink + settings.defaultKeyLink.replace(/\/$/, "") + "/" + folderPath2 + filename;
      url = encodeURI(url);
    } else {
      url = baseLink + settings.defaultKeyLink + "/" + file.name.replace(".md", "") + "/";
      url = encodeURI(url);
    }
  }
  return url;
}
function getValue(app, file, settings) {
  return __async(this, null, function* () {
    const meta = getMeta(app, file, settings);
    if (!meta) {
      return false;
    }
    let value = meta.value.toString();
    if (value.split(",").length > 1) {
      value = "- " + value.replaceAll(",", "\n- ");
    }
    const metaCopyValue = { key: meta.key, value: meta.value };
    const linkValue = createLink(file, settings, metaCopyValue, app);
    yield copy(linkValue, meta.key, settings);
  });
}
function checkSlash(link) {
  const slash = link.match(/\/*$/);
  if (slash[0].length != 1) {
    link = link.replace(/\/*$/, "") + "/";
  }
  return link;
}
function copy(content, item, settings) {
  return __async(this, null, function* () {
    yield navigator.clipboard.writeText(content);
    let message = "Metadata " + item + " copied to clipboard";
    message = t("metadataMessage")(item);
    if (item == "DefaultKey" || item == settings.keyLink) {
      message = t("metadataMessageURL");
    }
    new import_obsidian3.Notice(message);
  });
}

// metacopy/modal.ts
var CopyMetaSuggester = class extends import_obsidian4.FuzzySuggestModal {
  constructor(app, settings, file) {
    super(app);
    this.file = file;
    this.settings = settings;
  }
  getItemText(item) {
    return item.key;
  }
  getItems() {
    return getAllMeta(this.app, this.file, this.settings);
  }
  onChooseItem(item, evt) {
    item.value = item.value.toString();
    if (item.value.split(",").length > 1) {
      item.value = "- " + item.value.replaceAll(",", "\n- ");
    }
    let contents = item.value;
    if (item.key === "Copy link") {
      contents = createLink(this.file, this.settings, { key: item.key, value: item.value }, this.app);
    }
    copy(contents, item.key, this.settings);
  }
};

// metacopy/main.ts
var MetaCopy = class extends import_obsidian5.Plugin {
  onload() {
    return __async(this, null, function* () {
      console.log("MetaCopy loaded");
      yield this.loadSettings();
      this.addSettingTab(new CopySettingsTabs(this.app, this));
      this.registerEvent(this.app.workspace.on("file-menu", (menu, file) => {
        const meta = getMeta(this.app, file, this.settings);
        if (!meta) {
          return false;
        }
        const keyMeta = meta.key;
        let title = "Copy [" + keyMeta + "]";
        let icon = "two-blank-pages";
        const enableMetaCopy = disableMetaCopy(this.app, this.settings, file);
        if ((keyMeta === this.settings.keyLink || this.settings.defaultKeyLink) && enableMetaCopy) {
          title = "MetaCopy URL";
          icon = "price-tag-glyph";
        }
        if (meta.value && enableMetaCopy) {
          menu.addSeparator();
          menu.addItem((item) => {
            item.setSection("info");
            item.setTitle(title).setIcon(icon).onClick(() => __async(this, null, function* () {
              yield getValue(this.app, file, this.settings);
            }));
          });
          menu.addSeparator();
        }
      }));
      this.registerEvent(this.app.workspace.on("editor-menu", (menu, editor, view) => {
        const meta = getMeta(this.app, view.file, this.settings);
        if (!meta) {
          return false;
        }
        const keyMeta = meta.key;
        const enableMetaCopy = disableMetaCopy(this.app, this.settings, view.file);
        if ((keyMeta === this.settings.keyLink || this.settings.defaultKeyLink) && enableMetaCopy) {
          menu.addSeparator();
          menu.addItem((item) => {
            item.setSection("info");
            item.setTitle("MetaCopy URL").setIcon("price-tag-glyph").onClick(() => __async(this, null, function* () {
              yield getValue(this.app, view.file, this.settings);
            }));
          });
          menu.addSeparator();
        }
      }));
      this.addCommand({
        id: "obsidian-metacopy",
        name: "Metacopy",
        hotkeys: [],
        checkCallback: (checking) => {
          const fileMeta = checkMeta(this.app, this.settings);
          if (fileMeta) {
            if (!checking) {
              new CopyMetaSuggester(this.app, this.settings, this.app.workspace.getActiveFile()).open();
            }
            return true;
          }
          return false;
        }
      });
    });
  }
  onunload() {
    return __async(this, null, function* () {
      console.log("MetaCopy unloaded");
    });
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
