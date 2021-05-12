"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickPosition = exports.QSlider = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractSlider_1 = require("./QAbstractSlider");
/**
 
> Create and control slider widgets.

* **This class is a JS wrapper around Qt's [QSlider class](https://doc.qt.io/qt-5/qslider.html)**

A `QSlider` provides ability to add and manipulate native slider widgets.

### Example

```javascript
const { QSlider } = require("@nodegui/nodegui");

const slider = new QSlider();
```
 */
class QSlider extends QAbstractSlider_1.QAbstractSlider {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QSlider(parent.native);
        }
        else {
            native = new addon_1.default.QSlider();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    setTickInterval(ti) {
        this.setProperty('tickInterval', ti);
    }
    tickInterval() {
        return this.property('tickInterval').toInt();
    }
    setTickPosition(position) {
        this.setProperty('tickPosition', position);
    }
    tickPosition() {
        return this.property('tickPosition').toInt();
    }
}
exports.QSlider = QSlider;
var TickPosition;
(function (TickPosition) {
    TickPosition[TickPosition["NoTicks"] = 0] = "NoTicks";
    TickPosition[TickPosition["TicksAbove"] = 1] = "TicksAbove";
    TickPosition[TickPosition["TicksBelow"] = 2] = "TicksBelow";
    TickPosition[TickPosition["TicksBothSides"] = 3] = "TicksBothSides";
    TickPosition[TickPosition["TicksLeft"] = 1] = "TicksLeft";
    TickPosition[TickPosition["TicksRight"] = 2] = "TicksRight";
})(TickPosition = exports.TickPosition || (exports.TickPosition = {}));
