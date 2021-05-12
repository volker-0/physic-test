import { NodeWidget } from './QWidget';
import { NodeObject, QObjectSignals } from '../QtCore/QObject';
/**
 
> Abstract class to add functionalities common to all Layout.

**This class implements all methods, properties of Qt's [QLayout class](https://doc.qt.io/qt-5/qlayout.html) so that it can be inherited by all layouts**

`NodeLayout` is an abstract class and hence no instances of the same should be created. It exists so that we can add similar functionalities to all layout's easily. Additionally it helps in typechecking process.

### Example

```javascript
const {
  NodeLayout,
  NodeWidget,
  FlexLayout,
  GridLayout,
  QPushButton,
  QWidget
} = require("@nodegui/nodegui");

// addChildToLayout can accept any layout since it expects NodeLayout
const addChildToLayout = (layout: NodeLayout, widget: NodeWidget) => {
  layout.addWidget(widget);
};

addChildToLayout(new FlexLayout(), new QPushButton());
addChildToLayout(new GridLayout(), new QWidget());
```
 */
export declare abstract class NodeLayout<Signals extends QLayoutSignals> extends NodeObject<Signals> {
    type: string;
    abstract addWidget(childWidget: NodeWidget<any>, ...args: any[]): void;
    abstract removeWidget(childWidget: NodeWidget<any>): void;
    setSizeConstraint(constraint: SizeConstraint): void;
    sizeConstraint(): SizeConstraint;
    setSpacing(spacing: number): void;
    spacing(): number;
    activate(): boolean;
    setEnabled(enable: boolean): void;
    isEnabled(): boolean;
    setContentsMargins(left: number, top: number, right: number, bottom: number): void;
    invalidate(): void;
    update(): void;
}
export declare enum SizeConstraint {
    SetDefaultConstraint = 0,
    SetNoConstraint = 1,
    SetMinimumSize = 2,
    SetFixedSize = 3,
    SetMaximumSize = 4,
    SetMinAndMaxSize = 5
}
export declare type QLayoutSignals = QObjectSignals;
