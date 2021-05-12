"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineWrapMode = exports.QPlainTextEdit = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractScrollArea_1 = require("./QAbstractScrollArea");
/**
 
> Used to edit and display plain text.

* **This class is a JS wrapper around Qt's [QPlainTextEdit class](https://doc.qt.io/qt-5/qplaintextedit.html)**

A `QPlainTextEdit` provides ability to add and manipulate native editable text field widgets.

### Example

```javascript
const { QPlainTextEdit } = require("@nodegui/nodegui");

const plainTextEdit = new QPlainTextEdit();
```
 */
class QPlainTextEdit extends QAbstractScrollArea_1.QAbstractScrollArea {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QPlainTextEdit(parent.native);
        }
        else {
            native = new addon_1.default.QPlainTextEdit();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    setPlainText(text) {
        // react:✓
        this.native.setPlainText(`${text}`);
    }
    setPlaceholderText(text) {
        // react:✓, //TODO:getter
        this.placeholderText = text;
        this.native.setPlaceholderText(text);
    }
    toPlainText() {
        // react:✓
        return this.native.toPlainText();
    }
    setReadOnly(isReadOnly) {
        // react:✓
        this.native.setReadOnly(isReadOnly);
    }
    clear() {
        // react:✓
        this.native.clear();
    }
    setWordWrapMode(mode) {
        this.native.setWordWrapMode(mode);
    }
    wordWrapMode() {
        return this.native.wordWrapMode();
    }
    setLineWrapMode(mode) {
        this.native.setLineWrapMode(mode);
    }
    lineWrapMode() {
        return this.native.lineWrapMode();
    }
    insertPlainText(text) {
        this.native.insertPlainText(`${text}`);
    }
}
exports.QPlainTextEdit = QPlainTextEdit;
var LineWrapMode;
(function (LineWrapMode) {
    LineWrapMode[LineWrapMode["NoWrap"] = 0] = "NoWrap";
    LineWrapMode[LineWrapMode["WidgetWidth"] = 1] = "WidgetWidth";
})(LineWrapMode = exports.LineWrapMode || (exports.LineWrapMode = {}));
