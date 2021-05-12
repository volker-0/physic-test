"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertPolicy = exports.QComboBox = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
const QVariant_1 = require("../QtCore/QVariant");
/**
 
> Create and control a selectable drop down menu.

* **This class is a JS wrapper around Qt's [QComboBox class](https://doc.qt.io/qt-5/qcombobox.html)**

A `QComboBox` provides a means of presenting a list of options to the user.

### Example

```javascript
const { QComboBox } = require("@nodegui/nodegui");

const comboBox = new QComboBox();
comboBox.addItem(undefined, 'comboBox item 0');
comboBox.addItem(undefined, 'comboBox item 1');
comboBox.addItem(undefined, 'comboBox item 2');
comboBox.addItem(undefined, 'comboBox item 3');

comboBox.addEventListener('currentTextChanged', (text) => {
    console.log('currentTextChanged: ' + text);
});

comboBox.addEventListener('currentIndexChanged', (index) => {
    console.log('currentIndexChanged: ' + index);
});
```
 */
class QComboBox extends QWidget_1.NodeWidget {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QComboBox(parent.native);
        }
        else {
            native = new addon_1.default.QComboBox();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    addItem(icon, text, userData = new QVariant_1.QVariant()) {
        if (icon) {
            this.native.addItem(icon.native, text, userData.native);
        }
        else {
            this.native.addItem(text, userData.native);
        }
    }
    insertItem(index, icon, text, userData = new QVariant_1.QVariant()) {
        if (icon) {
            this.native.insertItem(index, icon.native, text, userData.native);
        }
        else {
            this.native.insertItem(index, text, userData.native);
        }
    }
    addItems(texts) {
        this.native.addItems(texts);
    }
    insertItems(index, texts) {
        this.native.insertItems(index, texts);
    }
    currentIndex() {
        return this.native.currentIndex();
    }
    currentText() {
        return this.native.currentText();
    }
    insertSeparator(index) {
        this.native.insertSeparator(index);
    }
    itemText(index) {
        return this.native.itemText(index);
    }
    itemData(index) {
        return new QVariant_1.QVariant(this.native.itemData(index));
    }
    removeItem(index) {
        this.native.removeItem(index);
    }
    sizeAdjustPolicy() {
        return this.native.sizeAdjustPolicy();
    }
    setSizeAdjustPolicy(policy) {
        this.native.setSizeAdjustPolicy(policy);
    }
    maxVisibleItems() {
        return this.native.maxVisibleItems();
    }
    setMaxVisibleItems(index) {
        this.native.setMaxVisibleItems(index);
    }
    isEditable() {
        return this.native.isEditable();
    }
    setEditable(editable) {
        this.native.setEditable(editable);
    }
    clear() {
        this.native.clear();
    }
    setCurrentText(text) {
        this.setProperty('currentText', text);
    }
    setCurrentIndex(index) {
        this.setProperty('currentIndex', index);
    }
    setModel(model) {
        this.native.setModel(model.native);
    }
    setEditText(text) {
        this.native.setEditText(text);
    }
}
exports.QComboBox = QComboBox;
var InsertPolicy;
(function (InsertPolicy) {
    InsertPolicy[InsertPolicy["NoInsert"] = 0] = "NoInsert";
    InsertPolicy[InsertPolicy["InsertAtTop"] = 1] = "InsertAtTop";
    InsertPolicy[InsertPolicy["InsertAtCurrent"] = 2] = "InsertAtCurrent";
    InsertPolicy[InsertPolicy["InsertAtBottom"] = 3] = "InsertAtBottom";
    InsertPolicy[InsertPolicy["InsertAfterCurrent"] = 4] = "InsertAfterCurrent";
    InsertPolicy[InsertPolicy["InsertBeforeCurrent"] = 5] = "InsertBeforeCurrent";
    InsertPolicy[InsertPolicy["InsertAlphabetically"] = 6] = "InsertAlphabetically";
})(InsertPolicy = exports.InsertPolicy || (exports.InsertPolicy = {}));
