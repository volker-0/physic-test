"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QClipboardMode = exports.QClipboard = void 0;
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
const QPixmap_1 = require("./QPixmap");
/**
 
> The QClipboard class provides access to the window system clipboard.

* **This class is a JS wrapper around Qt's [QClipboard class](https://doc.qt.io/qt-5/QClipboard.html)**

### Example

```javascript
const {
  QClipboard,
  QClipboardMode,
  QApplication
} = require("@nodegui/nodegui");

const clipboard = QApplication.clipboard();
const text = clipboard.text(QClipboardMode.Clipboard);
```
 */
class QClipboard extends Component_1.Component {
    constructor(native) {
        super();
        if (helpers_1.checkIfNativeElement(native)) {
            this.native = native;
        }
        else {
            throw new Error('QClipboard cannot be initialised this way. Use QApplication::clipboard()');
        }
    }
    clear(mode) {
        this.native.clear(mode);
    }
    setText(text, mode) {
        this.native.setText(text, mode);
    }
    text(mode) {
        return this.native.text(mode);
    }
    setPixmap(pixmap, mode) {
        this.native.setPixmap(pixmap.native, mode);
    }
    pixmap(mode) {
        return new QPixmap_1.QPixmap(this.native.pixmap(mode));
    }
}
exports.QClipboard = QClipboard;
var QClipboardMode;
(function (QClipboardMode) {
    QClipboardMode[QClipboardMode["Clipboard"] = 0] = "Clipboard";
    QClipboardMode[QClipboardMode["Selection"] = 1] = "Selection";
    QClipboardMode[QClipboardMode["FindBuffer"] = 2] = "FindBuffer";
})(QClipboardMode = exports.QClipboardMode || (exports.QClipboardMode = {}));
