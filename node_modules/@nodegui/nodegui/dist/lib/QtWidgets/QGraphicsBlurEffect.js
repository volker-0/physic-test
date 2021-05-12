"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlurHint = exports.QGraphicsBlurEffect = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QGraphicsEffect_1 = require("./QGraphicsEffect");
/**
 
> The QGraphicsBlurEffect class provides a blur effect.

* **This class is a JS wrapper around Qt's [QGraphicsBlurEffect class](https://doc.qt.io/qt-5/qgraphicsblureffect.html)**

A blur effect blurs the source. This effect is useful for reducing details, such as when the source loses focus and you want to draw attention to other elements.

### Example

```javascript
const { QGraphicsBlurEffect } = require("@nodegui/nodegui");

const blur = new QGraphicsBlurEffect();
blur.setBlurRadius(8);
```
 */
class QGraphicsBlurEffect extends QGraphicsEffect_1.QGraphicsEffect {
    constructor(arg) {
        let native;
        if (arg) {
            if (helpers_1.checkIfNativeElement(arg)) {
                native = arg;
            }
            else {
                native = new addon_1.default.QGraphicsBlurEffect(arg.native);
            }
        }
        else {
            native = new addon_1.default.QGraphicsBlurEffect();
        }
        super(native);
        this.native = native;
    }
    setBlurHints(hints) {
        this.setProperty('blurHints', hints);
    }
    blurHints() {
        return this.property('blurHints').toInt();
    }
    setBlurRadius(blurRadius) {
        this.setProperty('blurRadius', blurRadius);
    }
    blurRadius() {
        return this.property('blurRadius').toDouble();
    }
}
exports.QGraphicsBlurEffect = QGraphicsBlurEffect;
var BlurHint;
(function (BlurHint) {
    BlurHint[BlurHint["PerformanceHint"] = 0] = "PerformanceHint";
    BlurHint[BlurHint["QualityHint"] = 1] = "QualityHint";
    BlurHint[BlurHint["AnimationHint"] = 2] = "AnimationHint";
})(BlurHint = exports.BlurHint || (exports.BlurHint = {}));
