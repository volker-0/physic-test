import { NodeWidget } from './QWidget';
import { NodeLayout, QLayoutSignals } from './QLayout';
import { NativeElement } from '../core/Component';
import { Direction } from '../QtEnums';
/**
 
> Lines up child widgets horizontally or vertically.

* **This class is a JS wrapper around Qt's [QBoxLayout class](https://doc.qt.io/qt-5/qboxlayout.html)**

### Example

```javascript
// This example arranges two calendars horizontally.

const { QBoxLayout, QCalendarWidget } = require("@nodegui/nodegui");

const centralWidget = new QWidget();
const boxLayout = new QBoxLayout(0);

boxLayout.addWidget(new QCalendarWidget());
boxLayout.addWidget(new QCalendarWidget());
centralWidget.setLayout(boxLayout);
```
 */
export declare class QBoxLayout extends NodeLayout<QBoxLayoutSignals> {
    native: NativeElement;
    childLayouts: Set<NodeLayout<any>>;
    constructor(dir: Direction);
    constructor(dir: Direction, parent: NodeWidget<any>);
    addLayout(layout: NodeLayout<any>, stretch?: number): void;
    addSpacing(size: number): void;
    addStretch(stretch?: number): void;
    addStrut(size: number): void;
    addWidget(widget: NodeWidget<any>, stretch?: number): void;
    insertWidget(index: number, widget: NodeWidget<any>, stretch?: number): void;
    direction(): Direction;
    insertLayout(index: number, layout: NodeLayout<any>, stretch?: number): void;
    insertSpacing(index: number, size: number): void;
    insertStretch(index: number, stretch?: number): void;
    removeWidget(widget: NodeWidget<any>): void;
    setDirection(dir: Direction): void;
    setStretch(index: number, stretch: number): void;
    count(): number;
}
export declare type QBoxLayoutSignals = QLayoutSignals;
