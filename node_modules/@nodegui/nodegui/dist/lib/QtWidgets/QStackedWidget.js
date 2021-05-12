"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QStackedWidget = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QFrame_1 = require("./QFrame");
/**
 
> Create and control stacked widgets where only one is visible at a time.

* **This class is a JS wrapper around Qt's [QStackedWidget class](https://doc.qt.io/qt-5/qstackedwidget.html)**

### Example

```javascript

const { QMainWindow, QLabel, QStackedWidget } = require("@nodegui/nodegui");

const win = new QMainWindow();
const stacked = new QStackedWidget();

const first = new QLabel();
first.setText('First');

const second = new QLabel();
second.setText('Second');

const third = new QLabel();
third.setText('Third');

stacked.addWidget(first);
stacked.addWidget(second);
stacked.addWidget(third);

stacked.setCurrentWidget(second);
//or
// stacked.setCurrentIndex(1);

win.setCentralWidget(stacked);
win.resize(200, 200);

win.show();
(global as any).win = win;


```
 */
class QStackedWidget extends QFrame_1.NodeFrame {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QStackedWidget(parent.native);
        }
        else {
            native = new addon_1.default.QStackedWidget();
        }
        super(native);
        this.setNodeParent(parent);
        this.native = native;
    }
    addWidget(widget) {
        this.native.addWidget(widget.native);
        this.nodeChildren.add(widget);
        widget.setFlexNodeSizeControlled(true);
    }
    removeWidget(widget) {
        this.native.removeWidget(widget.native);
        this.nodeChildren.delete(widget);
    }
    setCurrentIndex(index) {
        this.native.setCurrentIndex(index);
    }
    currentIndex() {
        return this.native.currentIndex();
    }
    setCurrentWidget(widget) {
        this.native.setCurrentWidget(widget.native);
    }
}
exports.QStackedWidget = QStackedWidget;
