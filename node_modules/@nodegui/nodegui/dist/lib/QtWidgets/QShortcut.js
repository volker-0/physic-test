"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QShortcut = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QObject_1 = require("../QtCore/QObject");
/**
 
> The QShortcut class is used to create keyboard shortcuts.

* **This class is a JS wrapper around Qt's [QShortcut class](https://doc.qt.io/qt-5/qshortcut.html)**

### Example

```javascript
const { QShortcut, QKeySequence, QMainWindow } = require("@nodegui/nodegui");

const win = new QMainWindow();
const shortcut = new QShortcut(win);
shortcut.setKey(new QKeySequence("Ctrl+M"));
shortcut.setEnabled(true);
shortcut.addEventListener(QShortcutEvents.activated, () => {
  console.log("Shortcut Activated");
});

win.show();
global.win = win;
global.shortcut = shortcut;
```
 */
class QShortcut extends QObject_1.NodeObject {
    constructor(parent) {
        const native = new addon_1.default.QShortcut(parent.native);
        super(native);
        this.native = native;
    }
    setEnabled(enabled) {
        this.native.setEnabled(enabled);
    }
    setAutoRepeat(on) {
        this.native.setAutoRepeat(on);
    }
    setKey(keysequence) {
        this.native.setKey(keysequence.native);
    }
    setContext(shortcutContext) {
        this.native.setContext(shortcutContext);
    }
}
exports.QShortcut = QShortcut;
