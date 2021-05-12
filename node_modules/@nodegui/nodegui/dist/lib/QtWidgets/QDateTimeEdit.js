"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDateTimeEdit = exports.NodeDateTimeEdit = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractSpinBox_1 = require("./QAbstractSpinBox");
const QDate_1 = require("../QtCore/QDate");
const QDateTime_1 = require("../QtCore/QDateTime");
const QTime_1 = require("../QtCore/QTime");
class NodeDateTimeEdit extends QAbstractSpinBox_1.QAbstractSpinBox {
    setCalendarWidget(calendarWidget) {
        this.calendar = calendarWidget;
        this.native.setCalendarWidget(calendarWidget.native);
    }
    calendarWidget() {
        const calendar = this.calendar;
        if (calendar) {
            return calendar;
        }
        return null;
    }
    setCalendarPopup(enable) {
        this.setProperty('calendarPopup', enable);
    }
    calendarPopup() {
        return this.property('calendarPopup').toBool();
    }
    setDate(date) {
        this.setProperty('date', date.native);
    }
    date() {
        const date = this.property('date');
        return QDate_1.QDate.fromQVariant(date);
    }
    setDateTime(datetime) {
        this.setProperty('dateTime', datetime.native);
    }
    dateTime() {
        const datetime = this.property('dateTime');
        return QDateTime_1.QDateTime.fromQVariant(datetime);
    }
    setDisplayFormat(format) {
        this.setProperty('displayFormat', format);
    }
    displayFormat() {
        return this.property('displayFormat').toString();
    }
    setTime(time) {
        this.setProperty('time', time.native);
    }
    time() {
        const time = this.property('time');
        return QTime_1.QTime.fromQVariant(time);
    }
    setTimeSpec(spec) {
        this.setProperty('timeSpec', spec);
    }
    timeSpec() {
        return this.property('timeSpec').toInt();
    }
}
exports.NodeDateTimeEdit = NodeDateTimeEdit;
/**
 
> Creates and controls a widget for editing dates and times with spin box layout.

* **This class is a JS wrapper around Qt's [QDateTimeEdit class](https://doc.qt.io/qt-5/qdatetimeedit.html)**

### Example

```javascript
const { QDateTimeEdit, QDate, QTime } = require("@nodegui/nodegui");

const dateTimeEdit = new QDateTimeEdit();

let date = new QDate();
date.setDate(2020, 1, 1);

let time = new QTime();
time.setHMS(16, 30, 0);

dateTimeEdit.setDate(date);
dateTimeEdit.setTime(time);
```
 */
class QDateTimeEdit extends NodeDateTimeEdit {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QDateTimeEdit(parent.native);
        }
        else {
            native = new addon_1.default.QDateTimeEdit();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
}
exports.QDateTimeEdit = QDateTimeEdit;
