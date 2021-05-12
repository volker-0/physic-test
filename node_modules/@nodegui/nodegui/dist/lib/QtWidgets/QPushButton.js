"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QPushButton = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractButton_1 = require("./QAbstractButton");
const helpers_1 = require("../utils/helpers");
/**
 
> Create and control buttons.

* **This class is a JS wrapper around Qt's [QPushButton class](https://doc.qt.io/qt-5/qpushbutton.html)**

A `QPushButton` provides ability to add and manipulate native button widgets.

### Example

```javascript
const { QPushButton } = require("@nodegui/nodegui");

const button = new QPushButton();
button.setText("Hello");
```
 */
class QPushButton extends QAbstractButton_1.QAbstractButton {
    constructor(arg, disableNativeDeletion = true) {
        let native;
        let parent;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (helpers_1.checkIfNapiExternal(arg)) {
            native = new addon_1.default.QPushButton(arg, disableNativeDeletion);
        }
        else if (arg) {
            const parentWidget = arg;
            native = new addon_1.default.QPushButton(parentWidget.native);
            parent = parentWidget;
        }
        else {
            native = new addon_1.default.QPushButton();
        }
        super(native);
        this.native = native;
        parent && this.setNodeParent(parent);
    }
    setAutoDefault(auto) {
        this.setProperty('autoDefault', auto);
    }
    autoDefault() {
        return this.property('autoDefault').toBool();
    }
    setDefault(isDefault) {
        this.setProperty('default', isDefault);
    }
    isDefault() {
        return this.property('default').toBool();
    }
    setFlat(isFlat) {
        this.setProperty('flat', isFlat);
    }
    isFlat() {
        return this.property('flat').toBool();
    }
    setMenu(menu) {
        this._menu = menu;
        this.native.setMenu(menu.native);
    }
    menu() {
        if (this._menu) {
            return this._menu;
        }
        return null;
    }
    showMenu() {
        this.native.showMenu();
    }
}
exports.QPushButton = QPushButton;
