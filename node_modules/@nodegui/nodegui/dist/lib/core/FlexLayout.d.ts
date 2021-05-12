import { NodeWidget } from '../QtWidgets/QWidget';
import { NodeLayout, QLayoutSignals } from '../QtWidgets/QLayout';
import { FlexNode } from './YogaWidget';
import { NativeElement } from './Component';
export declare type FlexLayoutSignals = QLayoutSignals;
/**
 
> Custom layout to help layout child widgets using flex layout.

* **This class is a JS wrapper around custom Qt layout implemented using [Yoga](https://github.com/facebook/yoga)**

A `FlexLayout` can be used to layout all child NodeGui widgets using flex.

### Example

```javascript
const { FlexLayout, QWidget, QLabel } = require("@nodegui/nodegui");

const view = new QWidget();
const layout = new FlexLayout();
view.setLayout(layout);

const label = new QLabel();
label.setText("label1");
const label2 = new QLabel();
label2.setText("label2");

layout.addWidget(label);
layout.addWidget(label2);
```
 */
export declare class FlexLayout extends NodeLayout<FlexLayoutSignals> {
    native: NativeElement;
    protected flexNode?: FlexNode;
    constructor();
    constructor(parent: NodeWidget<any>);
    addWidget(childWidget: NodeWidget<any>, childFlexNode?: FlexNode): void;
    insertChildBefore(childWidget: NodeWidget<any>, beforeChildWidget: NodeWidget<any>, childFlexNode?: FlexNode, beforeChildFlexNode?: FlexNode): void;
    removeWidget(childWidget: NodeWidget<any>, childFlexNode?: FlexNode): void;
    setFlexNode(flexNode: FlexNode): void;
    getChildIndex(childWidget: NodeWidget<any>): number;
    getNextSibling(childWidget: NodeWidget<any>): NodeWidget<any> | null;
}
