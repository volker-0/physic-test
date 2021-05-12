"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QIconState = exports.QIconMode = exports.QIcon = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const Component_1 = require("../core/Component");
const QPixmap_1 = require("./QPixmap");
const helpers_1 = require("../utils/helpers");
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
class QIcon extends Component_1.Component {
    constructor(arg) {
        super();
        if (typeof arg === 'string') {
            const imagePath = arg;
            this.native = new addon_1.default.QIcon(imagePath);
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            this.native = arg;
        }
        else {
            this.native = new addon_1.default.QIcon();
        }
    }
    pixmap(width, height, mode, state) {
        let nativePixmap;
        if (mode && state) {
            nativePixmap = this.native.pixmap(width, height, mode, state);
        }
        else if (mode) {
            nativePixmap = this.native.pixmap(width, height, mode);
        }
        else {
            nativePixmap = this.native.pixmap(width, height);
        }
        return new QPixmap_1.QPixmap(nativePixmap);
    }
    isMask() {
        return this.native.isMask();
    }
    setIsMask(isMask) {
        this.native.setIsMask(isMask);
    }
    cacheKey() {
        return this.native.cacheKey();
    }
    static fromQVariant(variant) {
        return new QIcon(addon_1.default.QIcon.fromQVariant(variant.native));
    }
}
exports.QIcon = QIcon;
var QIconMode;
(function (QIconMode) {
    QIconMode[QIconMode["Normal"] = 0] = "Normal";
    QIconMode[QIconMode["Disabled"] = 1] = "Disabled";
    QIconMode[QIconMode["Active"] = 2] = "Active";
    QIconMode[QIconMode["Selected"] = 3] = "Selected";
})(QIconMode = exports.QIconMode || (exports.QIconMode = {}));
var QIconState;
(function (QIconState) {
    QIconState[QIconState["Off"] = 0] = "Off";
    QIconState[QIconState["On"] = 1] = "On";
})(QIconState = exports.QIconState || (exports.QIconState = {}));
