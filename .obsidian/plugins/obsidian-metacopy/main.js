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
var import_obsidian4 = __toModule(require("obsidian"));

// metacopy/settings.ts
var import_obsidian = __toModule(require("obsidian"));
var DEFAULT_SETTINGS = {
  copyKey: "",
  baseLink: "",
  keyLink: "",
  comport: false,
  disableKey: "",
  folderNote: false,
  defaultKeyLink: "",
  behaviourLinkCreator: "categoryKey"
};
var CopySettingsTabs = class extends import_obsidian.PluginSettingTab {
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
    containerEl.createEl("h2", { text: "Metacopy Settings" });
    new import_obsidian.Setting(containerEl).setName("Key").setDesc("The key which you want to copy the value").addTextArea((text) => text.setPlaceholder("key1, key2, key3,\u2026").setValue(this.plugin.settings.copyKey).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.copyKey = value;
      yield this.plugin.saveSettings();
    })));
    containerEl.createEl("h3", { text: "Link creator" });
    new import_obsidian.Setting(containerEl).setName("Base link").setDesc("The base of the link").addText((text) => text.setPlaceholder("https://obsidian-file.github.io/").setValue(this.plugin.settings.baseLink).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.baseLink = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian.Setting(containerEl).setName("Default behavior").setDesc("Choose between a metadata key, obsidian path & fixed folder for the link creator").addDropdown((dropdown) => dropdown.addOptions({
      fixedFolder: "Fixed Folder",
      categoryKey: "Metadata Key",
      obsidianPath: "Obsidian Path"
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
    const keyLinkSettings = new import_obsidian.Setting(containerEl).setName("key link").setDesc("The key to create as link").setClass("metacopy-settings").addText((text) => text.setPlaceholder("").setValue(this.plugin.settings.keyLink).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.keyLink = value;
      yield this.plugin.saveSettings();
    })));
    if (this.plugin.settings.behaviourLinkCreator === "categoryKey") {
      showSettings(keyLinkSettings);
    } else {
      hideSettings(keyLinkSettings);
    }
    new import_obsidian.Setting(containerEl).setName("Default value").setDesc("If you want to active the link creation without the key set.").addText((text) => text.setPlaceholder("").setValue(this.plugin.settings.defaultKeyLink).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.defaultKeyLink = value;
      yield this.plugin.saveSettings();
    })));
    const folderNoteSettings = new import_obsidian.Setting(containerEl).setName("Folder Note").setDesc("if file name = key link or parent folder, remove the file name in the link").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.folderNote);
      toggle.onChange((value) => __async(this, null, function* () {
        this.plugin.settings.folderNote = value;
        yield this.plugin.saveSettings();
      }));
    });
    if (this.plugin.settings.behaviourLinkCreator === "fixedFolder") {
      hideSettings(folderNoteSettings);
    } else {
      showSettings(folderNoteSettings);
    }
    containerEl.createEl("h3", { text: "Disable MetaCopy" });
    containerEl.createEl("p", {
      text: "Disable Metacopy context menu with a frontmatter key."
    });
    containerEl.createEl("p", {
      text: "Also disable the URL creation in command modal."
    });
    new import_obsidian.Setting(containerEl).setName("Menu behavior").setDesc("Enable : require a configured key to enable the menu").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.comport);
      toggle.onChange((value) => __async(this, null, function* () {
        this.plugin.settings.comport = value;
        yield this.plugin.saveSettings();
      }));
    });
    new import_obsidian.Setting(containerEl).setName("Key menu").setDesc("Key used to disable/enable Metacopy file menu").addText((text) => text.setPlaceholder("").setValue(this.plugin.settings.disableKey).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.disableKey = value;
      yield this.plugin.saveSettings();
    })));
  }
};

// metacopy/modal.ts
var import_obsidian3 = __toModule(require("obsidian"));

// metacopy/src/utils.ts
var import_obsidian2 = __toModule(require("obsidian"));

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
  const fileCache = app.metadataCache.getFileCache(file);
  const meta = fileCache == null ? void 0 : fileCache.frontmatter;
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
    "linkValue": linkValue,
    "metaKey": metaKey
  };
  if (!linkValue && settings.defaultKeyLink) {
    return {
      "linkValue": settings.defaultKeyLink,
      "metaKey": "DefaultKey"
    };
  }
  ;
  return metaKeys;
}
function checkMeta(app, settings) {
  const file = app.workspace.getActiveFile();
  const meta = getMeta(app, file, settings);
  let checkKey = false;
  checkKey = (meta == null ? void 0 : meta.metaKey) === "DefaultKey" || (meta == null ? void 0 : meta.metaKey) === "Copy link";
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
function createLink(file, settings, linkValue, metaKey) {
  let url = linkValue;
  const folderPath = checkSlash(linkValue).replace(/(^\/|\/$)/, "");
  const folder = folderPath.split("/").slice(-1)[0];
  if (settings) {
    let baseLink = settings.baseLink;
    baseLink = checkSlash(baseLink);
    const folderNote = settings.folderNote;
    let fileName = file.name.replace(".md", "");
    if (settings.behaviourLinkCreator === "categoryKey") {
      const keyLink = settings.keyLink;
      if (metaKey === keyLink || metaKey == "DefaultKey" || metaKey == "Copy link") {
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
      if (filename === file.parent.name && folderNote) {
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
    let value = meta.linkValue.toString();
    if (value.split(",").length > 1) {
      value = "- " + value.replaceAll(",", "\n- ");
    }
    const linkValue = createLink(file, settings, meta.linkValue, meta.metaKey);
    yield copy(linkValue, meta.metaKey, settings);
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
    if (item == "DefaultKey" || item == settings.keyLink) {
      message = "Metacopy URL send to clipboard";
    }
    new import_obsidian2.Notice(message);
  });
}

// metacopy/modal.ts
var CopyMetaSuggester = class extends import_obsidian3.FuzzySuggestModal {
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
      contents = createLink(this.file, this.settings, item.value, item.key);
    }
    copy(contents, item.key, this.settings);
  }
};

// metacopy/main.ts
var MetaCopy = class extends import_obsidian4.Plugin {
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
        const keyMeta = meta.metaKey;
        let title = "Copy [" + keyMeta + "]";
        let icon = "two-blank-pages";
        const enableMetaCopy = disableMetaCopy(this.app, this.settings, file);
        if ((keyMeta === this.settings.keyLink || this.settings.defaultKeyLink) && enableMetaCopy) {
          title = "MetaCopy URL";
          icon = "price-tag-glyph";
        }
        if (meta.linkValue && enableMetaCopy) {
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
        const keyMeta = meta.metaKey;
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
