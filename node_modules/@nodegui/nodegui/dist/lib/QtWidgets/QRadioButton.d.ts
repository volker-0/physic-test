import { NodeWidget } from './QWidget';
import { NativeElement, NativeRawPointer } from '../core/Component';
import { QAbstractButton, QAbstractButtonSignals } from './QAbstractButton';
/**
 
> Create and control radio button.

* **This class is a JS wrapper around Qt's [QRadioButton class](https://doc.qt.io/qt-5/qradiobutton.html)**

A `QRadioButton` provides ability to add and manipulate native radio button widgets.

### Example

```javascript
const { QRadioButton } = require("@nodegui/nodegui");

const radioButton = new QRadioButton();
radioButton.setText("Hello");
```

 */
export declare class QRadioButton extends QAbstractButton<QRadioButtonSignals> {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
    constructor(rawPointer: NativeRawPointer<any>, disableNativeDeletion?: boolean);
}
export declare type QRadioButtonSignals = QAbstractButtonSignals;
