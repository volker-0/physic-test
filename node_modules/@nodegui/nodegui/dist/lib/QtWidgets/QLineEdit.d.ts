import { NodeWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
/**
 
> Create and control editable text field.

* **This class is a JS wrapper around Qt's [QLineEdit class](https://doc.qt.io/qt-5/qlineedit.html)**

A `QLineEdit` provides ability to add and manipulate native editable text field widgets.

### Example

```javascript
const { QLineEdit } = require("@nodegui/nodegui");

const lineEdit = new QLineEdit();
```

 */
export declare class QLineEdit extends NodeWidget<QLineEditSignals> {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
    setText(text: string): void;
    text(): string;
    setPlaceholderText(text: string): void;
    placeholderText(): string;
    setReadOnly(isReadOnly: boolean): void;
    isReadOnly(): boolean;
    clear(): void;
    setEchoMode(mode: EchoMode): void;
}
export declare enum EchoMode {
    Normal = 0,
    NoEcho = 1,
    Password = 2,
    PasswordEchoOnEdit = 3
}
export interface QLineEditSignals extends QWidgetSignals {
    cursorPositionChanged: (oldPos: number, newPos: number) => void;
    editingFinished: () => void;
    inputRejected: () => void;
    returnPressed: () => void;
    selectionChanged: () => void;
    textChanged: (text: string) => void;
    textEdited: (text: string) => void;
}
