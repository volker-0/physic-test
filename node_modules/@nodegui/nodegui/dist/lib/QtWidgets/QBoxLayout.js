"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QBoxLayout = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QLayout_1 = require("./QLayout");
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
class QBoxLayout extends QLayout_1.NodeLayout {
    constructor(dir, parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QBoxLayout(dir, parent.native);
        }
        else {
            native = new addon_1.default.QBoxLayout(dir);
        }
        super(native);
        this.setNodeParent(parent);
        this.native = native;
        this.childLayouts = new Set();
    }
    addLayout(layout, stretch = 0) {
        this.native.addLayout(layout.native, stretch);
        this.childLayouts.add(layout);
    }
    addSpacing(size) {
        this.native.addSpacing(size);
    }
    addStretch(stretch = 0) {
        this.native.addStretch(stretch);
    }
    addStrut(size) {
        this.native.addStrut(size);
    }
    addWidget(widget, stretch = 0) {
        this.native.addWidget(widget.native, stretch);
        this.nodeChildren.add(widget);
    }
    insertWidget(index, widget, stretch = 0) {
        this.native.insertWidget(index, widget.native, stretch);
        this.nodeChildren.add(widget);
    }
    direction() {
        return this.native.direction();
    }
    insertLayout(index, layout, stretch = 0) {
        this.native.insertLayout(index, layout.native, stretch);
        this.childLayouts.add(layout);
    }
    insertSpacing(index, size) {
        this.native.insertSpacing(index, size);
    }
    insertStretch(index, stretch = 0) {
        this.native.insertStretch(index, stretch);
    }
    removeWidget(widget) {
        this.native.removeWidget(widget.native);
        this.nodeChildren.delete(widget);
    }
    setDirection(dir) {
        this.native.setDirection(dir);
    }
    setStretch(index, stretch) {
        this.native.setStretch(index, stretch);
    }
    count() {
        return this.native.count();
    }
}
exports.QBoxLayout = QBoxLayout;
