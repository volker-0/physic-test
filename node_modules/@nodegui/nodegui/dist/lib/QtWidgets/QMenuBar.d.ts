import { QMenu } from './QMenu';
import { NativeElement } from '../core/Component';
import { NodeWidget, QWidgetSignals } from './QWidget';
import { QAction } from './QAction';
/**
 
> The QMenuBar class provides a menu widget for use in menu bars, context menus, and other popup menus.

* **This class is a JS wrapper around Qt's [QMenuBar class](https://doc.qt.io/qt-5/qmenu.html)**

### Example

```javascript
const { QMenuBar, QMainWindow } = require("@nodegui/nodegui");
const win = new QMainWindow();
const menu = new QMenuBar();
const menuBar = new QMenuBar();
win.setMenuBar(menuBar);
win.show();
global.win = win;
```
 */
export declare class QMenuBar extends NodeWidget<QMenuBarSignals> {
    native: NativeElement;
    _menus: Set<QMenu>;
    constructor();
    constructor(parent: NodeWidget<any>);
    constructor(native: NativeElement);
    addMenu(menu: QMenu | string): QMenu;
    addSeparator(): QAction;
    setNativeMenuBar(nativeMenuBar: boolean): void;
}
export declare type QMenuBarSignals = QWidgetSignals;
