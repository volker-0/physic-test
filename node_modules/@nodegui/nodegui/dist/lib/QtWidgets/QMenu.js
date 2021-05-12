"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QMenu = void 0;
const QWidget_1 = require("./QWidget");
const addon_1 = __importDefault(require("../utils/addon"));
/**
 
> The QMenu class provides a menu widget for use in menu bars, context menus, and other popup menus.

* **This class is a JS wrapper around Qt's [QMenu class](https://doc.qt.io/qt-5/qmenu.html)**

### Example

```javascript
const { QMenu } = require("@nodegui/nodegui");

const menu = new QMenu();
```
 */
class QMenu extends QWidget_1.NodeWidget {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QMenu(parent.native);
        }
        else {
            native = new addon_1.default.QMenu();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    setTitle(title) {
        this.native.setTitle(title);
    }
    addSeparator() {
        return this.native.addSeparator();
    }
    exec(point, action) {
        if (point && action) {
            this.native.exec(point.native, action.native);
        }
        else if (point) {
            this.native.exec(point.native);
        }
        else {
            this.native.exec();
        }
    }
    popup(point, action) {
        this.native.popup(point.native, action === null || action === void 0 ? void 0 : action.native);
    }
}
exports.QMenu = QMenu;
