"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QLabel = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QFrame_1 = require("./QFrame");
/**
 
> Create and control text.

* **This class is a JS wrapper around Qt's [QLabel class](https://doc.qt.io/qt-5/qlabel.html)**

A `QLabel` provides ability to add and manipulate text.

### Example

```javascript
const { QLabel } = require("@nodegui/nodegui");

const label = new QLabel();
label.setText("Hello");
```

 */
class QLabel extends QFrame_1.NodeFrame {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QLabel(parent.native);
        }
        else {
            native = new addon_1.default.QLabel();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    setAlignment(alignment) {
        this.setProperty('alignment', alignment);
    }
    alignment() {
        return this.property('alignment').toInt();
    }
    hasSelectedText() {
        return this.property('hasSelectedText').toBool();
    }
    setIndent(indent) {
        this.setProperty('indent', indent);
    }
    indent() {
        return this.property('indent').toInt();
    }
    setMargin(margin) {
        this.setProperty('margin', margin);
    }
    margin() {
        return this.property('margin').toInt();
    }
    setOpenExternalLinks(open) {
        this.setProperty('openExternalLinks', open);
    }
    openExternalLinks() {
        return this.property('openExternalLinks').toBool();
    }
    setScaledContents(scaled) {
        this.setProperty('scaledContents', scaled);
    }
    hasScaledContents() {
        return this.property('scaledContents').toBool();
    }
    selectedText() {
        return this.property('selectedText').toString();
    }
    setText(text) {
        this.setProperty('text', `${text}`);
    }
    text() {
        return this.property('text').toString();
    }
    setTextFormat(format) {
        this.setProperty('textFormat', format);
    }
    textFormat() {
        return this.property('textFormat').toInt();
    }
    setTextInteractionFlags(flags) {
        this.setProperty('textInteractionFlags', flags);
    }
    textInteractionFlags() {
        return this.property('textInteractionFlags').toInt();
    }
    setWordWrap(on) {
        this.setProperty('wordWrap', on);
    }
    wordWrap() {
        return this.property('wordWrap').toBool();
    }
    setSelection(start, length) {
        this.native.setSelection(start, length);
    }
    selectionStart() {
        return this.native.selectionStart();
    }
    setBuddy(buddy) {
        this.native.setBuddy(buddy.native);
        this._buddy = buddy;
    }
    buddy() {
        if (this._buddy) {
            return this._buddy;
        }
        return null;
    }
    setMovie(movie) {
        this.native.setMovie(movie.native);
        this._movie = movie;
    }
    movie() {
        return this._movie;
    }
    setPicture(picture) {
        this.native.setPicture(picture.native);
        this._picture = picture;
    }
    picture() {
        return this._picture;
    }
    setPixmap(pixMap) {
        this.native.setPixmap(pixMap.native);
        this._pixmap = pixMap;
    }
    pixmap() {
        return this._pixmap;
    }
    setNumDouble(num) {
        this.native.setNumDouble(num);
    }
    setNumInt(num) {
        this.native.setNumInt(num);
    }
    clear() {
        this.native.clear();
    }
}
exports.QLabel = QLabel;
