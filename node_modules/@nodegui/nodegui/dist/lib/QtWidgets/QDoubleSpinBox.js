"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDoubleSpinBox = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractSpinBox_1 = require("./QAbstractSpinBox");
/**
 
> Create and control double spin box widgets.

* **This class is a JS wrapper around Qt's [QDoubleSpinBox class](https://doc.qt.io/qt-5/qdoublespinbox.html)**

A `QDoubleSpinBox` provides ability to add and manipulate native double spin box widgets.

### Example

```javascript
const { QDoubleSpinBox } = require("@nodegui/nodegui");

const doublespinBox = new QDoubleSpinBox();
```
 */
class QDoubleSpinBox extends QAbstractSpinBox_1.QAbstractSpinBox {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QDoubleSpinBox(parent.native);
        }
        else {
            native = new addon_1.default.QDoubleSpinBox();
        }
        super(native);
        this.native = native;
        parent && this.setNodeParent(parent);
    }
    cleanText() {
        return this.property('cleanText').toString();
    }
    setDecimals(prec) {
        this.setProperty('decimals', prec);
    }
    decimals() {
        return this.property('decimals').toInt();
    }
    setMaximum(max) {
        this.setProperty('maximum', max);
    }
    maximum() {
        return this.property('maximum').toDouble();
    }
    setMinimum(min) {
        this.setProperty('minimum', min);
    }
    minimum() {
        return this.property('minimum').toDouble();
    }
    setPrefix(prefix) {
        this.setProperty('prefix', prefix);
    }
    prefix() {
        return this.property('prefix').toString();
    }
    setSingleStep(val) {
        this.setProperty('singleStep', val);
    }
    singleStep() {
        return this.property('singleStep').toDouble();
    }
    setStepType(stepType) {
        this.setProperty('stepType', stepType);
    }
    stepType() {
        return this.property('stepType').toInt();
    }
    setSuffix(suffix) {
        this.setProperty('suffix', suffix);
    }
    suffix() {
        return this.property('suffix').toString();
    }
    setValue(val) {
        this.setProperty('value', val);
    }
    value() {
        return this.property('value').toDouble();
    }
    setRange(minimum, maximum) {
        this.native.setRange(minimum, maximum);
    }
    textFromValue(value) {
        return this.native.textFromValue(value);
    }
    valueFromText(text) {
        return this.native.valueFromText(text);
    }
}
exports.QDoubleSpinBox = QDoubleSpinBox;
