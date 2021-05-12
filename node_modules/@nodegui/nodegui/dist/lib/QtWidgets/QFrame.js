"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QFrame = exports.Shape = exports.Shadow = exports.NodeFrame = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
const helpers_1 = require("../utils/helpers");
const QRect_1 = require("../QtCore/QRect");
class NodeFrame extends QWidget_1.NodeWidget {
    setFrameRect(r) {
        this.setProperty('frameRect', r.native);
    }
    frameRect() {
        return QRect_1.QRect.fromQVariant(this.property('frameRect'));
    }
    setFrameShadow(type) {
        this.setProperty('frameShadow', type);
    }
    frameShadow() {
        return this.property('frameShadow').toInt();
    }
    setFrameShape(type) {
        this.setProperty('frameShape', type);
    }
    frameShape() {
        return this.property('frameShape').toInt();
    }
    frameWidth() {
        return this.property('frameWidth').toInt();
    }
    setLineWidth(width) {
        this.setProperty('lineWidth', width);
    }
    lineWidth() {
        return this.property('lineWidth').toInt();
    }
    setMidLineWidth(width) {
        this.setProperty('midLineWidth', width);
    }
    midLineWidth() {
        return this.property('midLineWidth').toInt();
    }
    setFrameStyle(style) {
        this.native.setFrameStyle(style);
    }
    frameStyle() {
        return this.native.frameStyle();
    }
}
exports.NodeFrame = NodeFrame;
var Shadow;
(function (Shadow) {
    Shadow[Shadow["Plain"] = 16] = "Plain";
    Shadow[Shadow["Raised"] = 32] = "Raised";
    Shadow[Shadow["Sunken"] = 48] = "Sunken";
})(Shadow = exports.Shadow || (exports.Shadow = {}));
var Shape;
(function (Shape) {
    Shape[Shape["NoFrame"] = 0] = "NoFrame";
    Shape[Shape["Box"] = 1] = "Box";
    Shape[Shape["Panel"] = 2] = "Panel";
    Shape[Shape["WinPanel"] = 3] = "WinPanel";
    Shape[Shape["HLine"] = 4] = "HLine";
    Shape[Shape["VLine"] = 5] = "VLine";
    Shape[Shape["StyledPanel"] = 6] = "StyledPanel";
})(Shape = exports.Shape || (exports.Shape = {}));
/**
 > Create and control frame.

* **This class is a JS wrapper around Qt's [QFrame class](https://doc.qt.io/qt-5/qframe.html)**

The QFrame class is the base class of widgets that can have a frame. It can be used directly for creating simple placeholder frames without any contents.

### Example

```javascript
const { QFrame } = require("@nodegui/nodegui");

const frame = new QFrame();
```
 */
class QFrame extends NodeFrame {
    constructor(arg) {
        let native;
        let parent;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg) {
            parent = arg;
            native = new addon_1.default.QFrame(parent.native);
        }
        else {
            native = new addon_1.default.QFrame();
        }
        super(native);
        this.setNodeParent(parent);
        this.native = native;
    }
}
exports.QFrame = QFrame;
