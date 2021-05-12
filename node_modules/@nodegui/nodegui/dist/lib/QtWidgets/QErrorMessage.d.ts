import { NodeWidget } from './QWidget';
import { NativeElement } from '../core/Component';
import { NodeDialog, QDialogSignals } from './QDialog';
/**
 
> Create and control error message dialogs.

* **This class is a JS wrapper around Qt's [QErrorMessage class](https://doc.qt.io/qt-5/qerrormessage.html)**

The `QErrorMessage` class provides an error message display dialog.

### Example

```javascript
const { QErrorMessage } = require("@nodegui/nodegui");

const errorMessage = new QErrorMessage();

```
 */
export declare class QErrorMessage extends NodeDialog<QErrorMessageSignals> {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
    showMessage(message: string): void;
}
export declare type QErrorMessageSignals = QDialogSignals;
