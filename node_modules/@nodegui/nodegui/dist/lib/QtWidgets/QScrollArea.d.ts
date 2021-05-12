import { NodeWidget } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractScrollArea, QAbstractScrollAreaSignals } from './QAbstractScrollArea';
import { AlignmentFlag } from '../QtEnums';
/**
 
> A `QScrollArea` provides a scrolling view onto another widget.

* **This class is a JS wrapper around Qt's [QScrollArea class](https://doc.qt.io/qt-5/qscrollarea.html)**

### Example

```javascript
const { QScrollArea } = require("@nodegui/nodegui");

const scrollArea = new QScrollArea();
scrollArea.setInlineStyle("flex: 1; width:'100%';");

const imageLabel = new QLabel();
const pixmap = new QPixmap(
  path.resolve(__dirname, "../extras/assets/kitchen.png")
);
imageLabel.setPixmap(pixmap);

scrollArea.setWidget(imageLabel);
```
 */
export declare class QScrollArea extends QAbstractScrollArea<QScrollAreaSignals> {
    native: NativeElement;
    contentWidget?: NodeWidget<any> | null;
    constructor();
    constructor(parent: NodeWidget<any>);
    setAlignment(alignment: AlignmentFlag): void;
    alignment(): AlignmentFlag;
    setWidgetResizable(resizable: boolean): void;
    widgetResizable(): boolean;
    ensureVisible(x: number, y: number, xmargin?: number, ymargin?: number): void;
    ensureWidgetVisible(childWidget: NodeWidget<any>, xmargin?: number, ymargin?: number): void;
    setWidget(widget: NodeWidget<any>): void;
    widget(): NodeWidget<any> | null;
    takeWidget(): NodeWidget<any> | null;
}
export declare type QScrollAreaSignals = QAbstractScrollAreaSignals;
