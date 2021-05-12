"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QSpinBox = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractSpinBox_1 = require("./QAbstractSpinBox");
/**
 
> Create and control spin box widgets.

* **This class is a JS wrapper around Qt's [QSpinBox class](https://doc.qt.io/qt-5/qspinbox.html)**

A `QSpinBox` provides ability to add and manipulate native spin box widgets.

### Example

```javascript
const { QSpinBox } = require("@nodegui/nodegui");

const spinBox = new QSpinBox();
```
 */
class QSpinBox extends QAbstractSpinBox_1.QAbstractSpinBox {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QSpinBox(parent.native);
        }
        else {
            native = new addon_1.default.QSpinBox();
        }
        super(native);
        this.setNodeParent(parent);
        this.native = native;
    }
    cleanText() {
        return this.property('cleanText').toString();
    }
    setDisplayIntegerBase(base) {
        this.setProperty('displayIntegerBase', base);
    }
    displayIntegerBase() {
        return this.property('displayIntegerBase').toInt();
    }
    setMaximum(max) {
        this.setProperty('maximum', max);
    }
    maximum() {
        return this.property('maximum').toInt();
    }
    setMinimum(min) {
        this.setProperty('minimum', min);
    }
    minimum() {
        return this.property('minimum').toInt();
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
        return this.property('singleStep').toInt();
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
        return this.property('value').toInt();
    }
    setRange(minimum, maximum) {
        this.native.setRange(minimum, maximum);
    }
}
exports.QSpinBox = QSpinBox;
