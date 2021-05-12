"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTabWidget = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QWidget_1 = require("./QWidget");
/**
 
> Create and control a stack of tabbed widgets.

* **This class is a JS wrapper around Qt's [QTabWidget class](https://doc.qt.io/qt-5/qtabwidget.html)**

A 'QTabWidget' provides a tab bar and a "page area" that is used to display pages related to each tab.

### Example

```javascript
// This example creates two tabs, each holding a separate calendar.
const { QTabWidget, QCalendarWidget, QIcon } = require("@nodegui/nodegui");

const tabWidget = new QTabWidget();

tabWidget.addTab(new QCalendarWidget(), new QIcon(), 'Tab 1');
tabWidget.addTab(new QCalendarWidget(), new QIcon(), 'Tab 2');
```
 */
class QTabWidget extends QWidget_1.NodeWidget {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QTabWidget(parent.native);
        }
        else {
            native = new addon_1.default.QTabWidget();
        }
        super(native);
        this.setNodeParent(parent);
        this.tabs = [];
        this.native = native;
    }
    addTab(page, icon, label) {
        const index = this.native.addTab(page.native, icon.native, label);
        this.tabs.push(page);
        page.setFlexNodeSizeControlled(true);
        return index;
    }
    insertTab(index, page, icon, label) {
        const newIndex = this.native.insertTab(index, page.native, icon.native, label);
        this.tabs.splice(index, 0, page);
        return newIndex;
    }
    indexOf(widget) {
        return this.native.indexOf(widget.native);
    }
    setTabPosition(tabPosition) {
        this.native.setTabPosition(tabPosition);
    }
    setTabText(tabIndex, tabText) {
        this.native.setTabText(tabIndex, tabText);
    }
    setTabIcon(tabIndex, icon) {
        this.native.setTabIcon(tabIndex, icon.native);
    }
    setCurrentIndex(index) {
        this.native.setCurrentIndex(index);
    }
    currentIndex() {
        return this.native.currentIndex();
    }
    removeTab(index) {
        this.native.removeTab(index);
        const toRemove = this.tabs[index];
        toRemove.setFlexNodeSizeControlled(false);
        this.tabs.splice(index, 1);
    }
    setTabsClosable(closeable) {
        this.native.setTabsClosable(closeable);
    }
}
exports.QTabWidget = QTabWidget;
