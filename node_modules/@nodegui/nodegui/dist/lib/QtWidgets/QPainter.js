"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderHint = exports.QPainter = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const QColor_1 = require("../QtGui/QColor");
const QPen_1 = require("../QtGui/QPen");
/**
 
> Lets you paint on widgets.

* **This class is a JS wrapper around Qt's [QPainter class](https://doc.qt.io/qt-5/qpainter.html)**

Note: QPainter works only inside the paint event.

### Example

```javascript

import { FlexLayout, WidgetEventTypes, QMainWindow, QPainter, QWidget } from '@nodegui/nodegui';

const win = new QMainWindow();
const center = new QWidget();
const layout = new FlexLayout();
center.setLayout(layout);
win.resize(200, 200);

win.addEventListener(WidgetEventTypes.Paint, () => {
    const painter = new QPainter(win);
    painter.drawText(20, 20, 'Hello');
    painter.end();
});
win.show();
(global as any).win = win;

```

## Advanced example:

https://github.com/nodegui/examples/blob/master/nodegui/custom-native-widget-qpainter
*/
class QPainter extends Component_1.Component {
    constructor(device) {
        let native;
        if (device) {
            native = new addon_1.default.QPainter(device.native);
        }
        else {
            native = new addon_1.default.QPainter();
        }
        super();
        this.native = native;
    }
    drawText(x, y, text) {
        return this.native.drawText(x, y, text);
    }
    drawPath(path) {
        return this.native.drawPath(path.native);
    }
    strokePath(path, pen) {
        return this.native.strokePath(path.native, pen.native);
    }
    begin(device) {
        return this.native.begin(device.native);
    }
    end() {
        return this.native.end();
    }
    rotate(angle) {
        this.native.rotate(angle);
    }
    setPen(arg) {
        if (typeof arg == 'number') {
            this.native.setPen(arg, 'style');
        }
        else if (arg instanceof QColor_1.QColor) {
            this.native.setPen(arg.native, 'color');
        }
        else if (arg instanceof QPen_1.QPen) {
            this.native.setPen(arg.native, 'pen');
        }
    }
    setRenderHint(hint, on = true) {
        this.native.setRenderHint(hint, on);
    }
    drawLine(x1, y1, x2, y2) {
        this.native.drawLine(x1, y1, x2, y2);
    }
    scale(sx, sy) {
        this.native.scale(sx, sy);
    }
    translate(dx, dy) {
        this.native.translate(dx, dy);
    }
    drawConvexPolygon(points) {
        const nativePoints = points.map((point) => point.native);
        this.native.drawConvexPolygon(nativePoints);
    }
    save() {
        this.native.save();
    }
    restore() {
        this.native.restore();
    }
    setBrush(color) {
        this.native.setBrush(color.native);
    }
}
exports.QPainter = QPainter;
var RenderHint;
(function (RenderHint) {
    RenderHint[RenderHint["Antialiasing"] = 1] = "Antialiasing";
    RenderHint[RenderHint["TextAntialiasing"] = 2] = "TextAntialiasing";
    RenderHint[RenderHint["SmoothPixmapTransform"] = 4] = "SmoothPixmapTransform";
    RenderHint[RenderHint["HighQualityAntialiasing"] = 8] = "HighQualityAntialiasing";
    RenderHint[RenderHint["NonCosmeticDefaultPen"] = 16] = "NonCosmeticDefaultPen";
    RenderHint[RenderHint["Qt4CompatiblePainting"] = 32] = "Qt4CompatiblePainting";
    RenderHint[RenderHint["LosslessImageRendering"] = 64] = "LosslessImageRendering";
})(RenderHint = exports.RenderHint || (exports.RenderHint = {}));
