"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTimeEdit = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QDateTimeEdit_1 = require("./QDateTimeEdit");
/**
 
> Creates a widget to edit dates with spin box layout. WIP!

* **This class is a JS wrapper around Qt's [QTimeEdit class](https://doc.qt.io/qt-5/qtimeedit.html)**

A `QTimeEdit` a widget for editing times based on the QDateTimeEdit widget

### Example

```javascript
const { QTimeEdit } = require("@nodegui/nodegui");

const timeEdit = new QTimeEdit();
// must be implemented
```
 */
class QTimeEdit extends QDateTimeEdit_1.NodeDateTimeEdit {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QTimeEdit(parent.native);
        }
        else {
            native = new addon_1.default.QTimeEdit();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
}
exports.QTimeEdit = QTimeEdit;
