"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QProgressBarDirection = exports.QProgressBar = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
/**
 
> Create and control progress bar widgets.

* **This class is a JS wrapper around Qt's [QProgressBar class](https://doc.qt.io/qt-5/qprogressbar.html)**

A `QProgressBar` provides ability to add and manipulate native progress bar widgets.

### Example

```javascript
const { QProgressBar } = require("@nodegui/nodegui");

const progressBar = new QProgressBar();
```
 */
class QProgressBar extends QWidget_1.NodeWidget {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QProgressBar(parent.native);
        }
        else {
            native = new addon_1.default.QProgressBar();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    setAlignment(alignment) {
        this.setProperty('alignment', alignment);
    }
    alignment() {
        return this.property('alignment').toInt();
    }
    setFormat(format) {
        this.setProperty('format', format);
    }
    format() {
        return this.property('format').toString();
    }
    setInvertedAppearance(invert) {
        this.setProperty('invertedAppearance', invert);
    }
    invertedAppearance() {
        return this.property('invertedAppearance').toBool();
    }
    setMaximum(maximum) {
        this.setProperty('maximum', maximum);
    }
    maximum() {
        return this.property('maximum').toInt();
    }
    setMinimum(minimum) {
        this.setProperty('minimum', minimum);
    }
    minimum() {
        return this.property('minimum').toInt();
    }
    setOrientation(orientation) {
        this.setProperty('orientation', orientation);
    }
    orientation() {
        return this.property('orientation').toInt();
    }
    text() {
        return this.property('text').toString();
    }
    setTextDirection(textDirection) {
        this.setProperty('textDirection', textDirection);
    }
    textDirection() {
        return this.property('textDirection').toInt();
    }
    setTextVisible(visible) {
        this.setProperty('textVisible', visible);
    }
    isTextVisible() {
        return this.property('textVisible').toBool();
    }
    setValue(value) {
        this.setProperty('value', value);
    }
    value() {
        return this.property('value').toInt();
    }
    resetFormat() {
        this.native.resetFormat();
    }
    reset() {
        this.native.reset();
    }
    setRange(minimum, maximum) {
        this.native.setRange(minimum, maximum);
    }
}
exports.QProgressBar = QProgressBar;
var QProgressBarDirection;
(function (QProgressBarDirection) {
    QProgressBarDirection[QProgressBarDirection["TopToBottom"] = 0] = "TopToBottom";
    QProgressBarDirection[QProgressBarDirection["BottomToTop"] = 1] = "BottomToTop";
})(QProgressBarDirection = exports.QProgressBarDirection || (exports.QProgressBarDirection = {}));
