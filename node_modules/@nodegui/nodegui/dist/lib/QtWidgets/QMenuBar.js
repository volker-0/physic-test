"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QMenuBar = void 0;
const QMenu_1 = require("./QMenu");
const QWidget_1 = require("./QWidget");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
/**
 
> The QMenuBar class provides a menu widget for use in menu bars, context menus, and other popup menus.

* **This class is a JS wrapper around Qt's [QMenuBar class](https://doc.qt.io/qt-5/qmenu.html)**

### Example

```javascript
const { QMenuBar, QMainWindow } = require("@nodegui/nodegui");
const win = new QMainWindow();
const menu = new QMenuBar();
const menuBar = new QMenuBar();
win.setMenuBar(menuBar);
win.show();
global.win = win;
```
 */
class QMenuBar extends QWidget_1.NodeWidget {
    constructor(arg) {
        let native;
        let parent;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (typeof arg === 'object') {
            native = new addon_1.default.QMenuBar(arg.native);
            parent = arg;
        }
        else {
            native = new addon_1.default.QMenuBar();
        }
        super(native);
        this.native = native;
        this._menus = new Set();
        this.setNodeParent(parent);
    }
    addMenu(menu) {
        if (typeof menu === 'string') {
            const qmenu = new QMenu_1.QMenu();
            qmenu.setTitle(menu);
            this.native.addMenu(qmenu.native);
            this._menus.add(qmenu);
            return qmenu;
        }
        this.native.addMenu(menu.native);
        this._menus.add(menu);
        return menu;
    }
    addSeparator() {
        return this.native.addSeparator();
    }
    setNativeMenuBar(nativeMenuBar) {
        this.native.setNativeMenuBar(nativeMenuBar);
    }
}
exports.QMenuBar = QMenuBar;
