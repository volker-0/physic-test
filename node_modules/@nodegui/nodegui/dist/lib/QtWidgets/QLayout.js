"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeConstraint = exports.NodeLayout = void 0;
const QObject_1 = require("../QtCore/QObject");
// All Layouts should extend this abstract class.
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
class NodeLayout extends QObject_1.NodeObject {
    constructor() {
        super(...arguments);
        this.type = 'layout';
    }
    setSizeConstraint(constraint) {
        this.setProperty('sizeConstraint', constraint);
    }
    sizeConstraint() {
        return this.property('sizeConstraint').toInt();
    }
    setSpacing(spacing) {
        this.setProperty('spacing', spacing);
    }
    spacing() {
        return this.property('spacing').toInt();
    }
    activate() {
        return this.native.activate();
    }
    setEnabled(enable) {
        this.native.setEnabled(enable);
    }
    isEnabled() {
        return this.native.isEnabled();
    }
    setContentsMargins(left, top, right, bottom) {
        this.native.setContentsMargins(left, top, right, bottom);
    }
    invalidate() {
        this.native.invalidate();
    }
    update() {
        this.native.update();
    }
}
exports.NodeLayout = NodeLayout;
// export class QLayout extends NodeLayout { //Dont need QLayout for now
//   native: any;
// }
var SizeConstraint;
(function (SizeConstraint) {
    SizeConstraint[SizeConstraint["SetDefaultConstraint"] = 0] = "SetDefaultConstraint";
    SizeConstraint[SizeConstraint["SetNoConstraint"] = 1] = "SetNoConstraint";
    SizeConstraint[SizeConstraint["SetMinimumSize"] = 2] = "SetMinimumSize";
    SizeConstraint[SizeConstraint["SetFixedSize"] = 3] = "SetFixedSize";
    SizeConstraint[SizeConstraint["SetMaximumSize"] = 4] = "SetMaximumSize";
    SizeConstraint[SizeConstraint["SetMinAndMaxSize"] = 5] = "SetMinAndMaxSize";
})(SizeConstraint = exports.SizeConstraint || (exports.SizeConstraint = {}));
