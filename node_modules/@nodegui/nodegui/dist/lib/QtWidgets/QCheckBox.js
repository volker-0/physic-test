"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QCheckBox = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractButton_1 = require("./QAbstractButton");
const helpers_1 = require("../utils/helpers");
/**
 
> Create and control checkbox.

* **This class is a JS wrapper around Qt's [QCheckBox class](https://doc.qt.io/qt-5/qcheckbox.html)**

A `QCheckBox` provides ability to add and manipulate native checkbox widgets.

### Example

```javascript
const { QCheckBox } = require("@nodegui/nodegui");

const checkbox = new QCheckBox();
checkbox.setText("Hello");
```
 */
class QCheckBox extends QAbstractButton_1.QAbstractButton {
    constructor(arg, disableNativeDeletion = true) {
        let native;
        let parent;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (helpers_1.checkIfNapiExternal(arg)) {
            native = new addon_1.default.QCheckBox(arg, disableNativeDeletion);
        }
        else if (arg) {
            const parentWidget = arg;
            native = new addon_1.default.QCheckBox(parentWidget.native);
            parent = parentWidget;
        }
        else {
            native = new addon_1.default.QCheckBox();
        }
        super(native);
        this.native = native;
        parent && this.setNodeParent(parent);
    }
    setTristate(y = true) {
        this.setProperty('tristate', y);
    }
    isTristate() {
        return this.property('tristate').toBool();
    }
    checkState() {
        return this.native.checkState();
    }
    setCheckState(state) {
        this.native.setCheckState(state);
    }
}
exports.QCheckBox = QCheckBox;
