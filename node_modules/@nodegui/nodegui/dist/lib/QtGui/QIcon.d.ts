import { Component, NativeElement } from '../core/Component';
import { QPixmap } from './QPixmap';
import { QVariant } from '../QtCore/QVariant';
/**
 
> The QIcon class provides scalable icons in different modes and states.

* **This class is a JS wrapper around Qt's [QIcon class](https://doc.qt.io/qt-5/qicon.html)**

### Example

```javascript
const { QIcon } = require("@nodegui/nodegui");

const imageUrl = "path/to/png";
const icon = new QIcon(imageUrl);
```
 */
export declare class QIcon extends Component {
    native: NativeElement;
    constructor();
    constructor(native: NativeElement);
    constructor(filePath: string);
    pixmap(width: number, height: number, mode?: QIconMode, state?: QIconState): QPixmap;
    isMask(): boolean;
    setIsMask(isMask: boolean): void;
    cacheKey(): number;
    static fromQVariant(variant: QVariant): QIcon;
}
export declare enum QIconMode {
    Normal = 0,
    Disabled = 1,
    Active = 2,
    Selected = 3
}
export declare enum QIconState {
    Off = 0,
    On = 1
}
