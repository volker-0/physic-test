import { Component, NativeElement } from '../core/Component';
import { QPainterPath } from '../QtWidgets/QPainterPath';
import { PenStyle } from '../QtEnums';
import { QColor } from '../QtGui/QColor';
import { QPoint } from '../QtCore/QPoint';
import { QPen } from '../QtGui/QPen';
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
export declare class QPainter extends Component {
    native: NativeElement;
    constructor();
    constructor(device: Component);
    drawText(x: number, y: number, text: string): void;
    drawPath(path: QPainterPath): void;
    strokePath(path: QPainterPath, pen: QPen): void;
    begin(device: Component): boolean;
    end(): boolean;
    rotate(angle: number): void;
    setPen(arg: PenStyle | QColor | QPen): void;
    setRenderHint(hint: RenderHint, on?: boolean): void;
    drawLine(x1: number, y1: number, x2: number, y2: number): void;
    scale(sx: number, sy: number): void;
    translate(dx: number, dy: number): void;
    drawConvexPolygon(points: QPoint[]): void;
    save(): void;
    restore(): void;
    setBrush(color: QColor): void;
}
export declare enum RenderHint {
    Antialiasing = 1,
    TextAntialiasing = 2,
    SmoothPixmapTransform = 4,
    HighQualityAntialiasing = 8,
    NonCosmeticDefaultPen = 16,
    Qt4CompatiblePainting = 32,
    LosslessImageRendering = 64
}
