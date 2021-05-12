"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QAction = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QFont_1 = require("../QtGui/QFont");
const QObject_1 = require("../QtCore/QObject");
const helpers_1 = require("../utils/helpers");
/**
 
> The QAction class provides an abstract user interface action that can be inserted into widgets.

* **This class is a JS wrapper around Qt's [QAction class](https://doc.qt.io/qt-5/qaction.html)**

### Example

```javascript
const { QAction, QMenu } = require("@nodegui/nodegui");

const menu = new QMenu();
const menuAction = new QAction();
menuAction.setText("subAction");
menuAction.addEventListener("triggered", () => {
  console.log("Action clicked");
});
menu.addAction(menuAction);
```
 */
class QAction extends QObject_1.NodeObject {
    constructor(parent) {
        let native;
        if (helpers_1.checkIfNativeElement(parent)) {
            native = parent;
        }
        else if (parent) {
            native = new addon_1.default.QAction(parent.native);
        }
        else {
            native = new addon_1.default.QAction();
        }
        super(native);
        this.native = native;
    }
    setText(text) {
        this.native.setText(text);
    }
    setEnabled(enabled) {
        this.native.setEnabled(enabled);
    }
    setIcon(icon) {
        this.icon = icon;
        this.native.setIcon(icon.native);
    }
    setMenu(menu) {
        this.menu = menu;
        this.native.setMenu(menu.native);
    }
    setShortcut(keysequence) {
        this.native.setShortcut(keysequence.native);
    }
    setShortcutContext(shortcutContext) {
        this.native.setShortcutContext(shortcutContext);
    }
    isCheckable() {
        return this.native.isCheckable();
    }
    setCheckable(isCheckable) {
        this.native.setCheckable(isCheckable);
    }
    isChecked() {
        return this.native.isChecked();
    }
    setChecked(isChecked) {
        this.native.setChecked(isChecked);
    }
    isSeparator() {
        return this.native.isSeparator();
    }
    setSeparator(isSeparator) {
        this.native.setSeparator(isSeparator);
    }
    setFont(font) {
        this.native.setFont(font.native);
    }
    font() {
        return QFont_1.QFont.fromQVariant(this.property('font'));
    }
}
exports.QAction = QAction;
