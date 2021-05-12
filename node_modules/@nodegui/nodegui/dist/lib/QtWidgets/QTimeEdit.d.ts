import { NodeWidget } from './QWidget';
import { NativeElement } from '../core/Component';
import { NodeDateTimeEdit } from './QDateTimeEdit';
/**
 
> Creates a widget to edit dates with spin box layout. WIP!

* **This class is a JS wrapper around Qt's [QTimeEdit class](https://doc.qt.io/qt-5/qtimeedit.html)**

A `QTimeEdit` a widget for editing times based on the QDateTimeEdit widget

### Example

```javascript
const { QTimeEdit } = require("@nodegui/nodegui");

const timeEdit = new QTimeEdit();
// must be implemented
```
 */
export declare class QTimeEdit extends NodeDateTimeEdit {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
}
