import { NodeWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { NodeLayout } from './QLayout';
import { QMenuBar } from './QMenuBar';
import { QStatusBar } from './QStatusBar';
/**
 
> Create and control windows.

* **This class is a JS wrapper around Qt's [QMainWindow class](https://doc.qt.io/qt-5/qmainwindow.html)**

A `QMainWindow` provides a main application window. Every widget in NodeGui should be a child/nested child of QMainWindow. QMainWindow in NodeGui is also responsible for FlexLayout calculations of its children.

### Example

```javascript
const { QMainWindow, QWidget } = require("@nodegui/nodegui");

const win = new QMainWindow();

const centralWidget = new QWidget();
win.setCentralWidget(centralWidget);

win.show();

global.win = win; // prevent's gc of win
```

QMainWindow needs to have a central widget set before other widgets can be added as a children/nested children.
Once a central widget is set you can add children/layout to the central widget.
 */
export declare class QMainWindow extends NodeWidget<QMainWindowSignals> {
    native: NativeElement;
    centralWidget?: NodeWidget<any> | null;
    private _menuBar?;
    private _statusBar?;
    constructor();
    constructor(parent: NodeWidget<any>);
    setCentralWidget(widget: NodeWidget<any>): void;
    takeCentralWidget(): NodeWidget<any> | null;
    setMenuBar(menuBar: QMenuBar): void;
    menuBar(): QMenuBar | undefined;
    setMenuWidget(menuWidget: NodeWidget<any>): void;
    get layout(): NodeLayout<any> | undefined;
    center(): void;
    /**
     * Sets the status bar for the main window to statusbar.
     * Note: QMainWindow takes ownership of the statusbar pointer and deletes it at the appropriate time.
     * @param statusBar The status bar.
     */
    setStatusBar(statusBar: QStatusBar): void;
    /**
     * Removes the status bar from the main window.
     */
    removeStatusBar(): void;
    /**
     * Returns the status bar for the main window.
     */
    statusBar(): QStatusBar;
}
export declare type QMainWindowSignals = QWidgetSignals;
