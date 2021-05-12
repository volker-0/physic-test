"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchoMode = exports.QLineEdit = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
/**
 
> Create and control editable text field.

* **This class is a JS wrapper around Qt's [QLineEdit class](https://doc.qt.io/qt-5/qlineedit.html)**

A `QLineEdit` provides ability to add and manipulate native editable text field widgets.

### Example

```javascript
const { QLineEdit } = require("@nodegui/nodegui");

const lineEdit = new QLineEdit();
```

 */
class QLineEdit extends QWidget_1.NodeWidget {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QLineEdit(parent.native);
        }
        else {
            native = new addon_1.default.QLineEdit();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    setText(text) {
        text && this.native.setText(text);
    }
    text() {
        return this.native.text();
    }
    setPlaceholderText(text) {
        this.native.setPlaceholderText(text);
    }
    placeholderText() {
        return this.property('placeholderText').toString();
    }
    setReadOnly(isReadOnly) {
        this.native.setReadOnly(isReadOnly);
    }
    isReadOnly() {
        return this.property('readOnly').toBool();
    }
    clear() {
        this.native.clear();
    }
    setEchoMode(mode) {
        this.native.setEchoMode(mode);
    }
}
exports.QLineEdit = QLineEdit;
var EchoMode;
(function (EchoMode) {
    EchoMode[EchoMode["Normal"] = 0] = "Normal";
    EchoMode[EchoMode["NoEcho"] = 1] = "NoEcho";
    EchoMode[EchoMode["Password"] = 2] = "Password";
    EchoMode[EchoMode["PasswordEchoOnEdit"] = 3] = "PasswordEchoOnEdit";
})(EchoMode = exports.EchoMode || (exports.EchoMode = {}));
