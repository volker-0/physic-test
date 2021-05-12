import { NodeWidget } from './QWidget';
import { NativeElement } from '../core/Component';
import { QAbstractSpinBox, QAbstractSpinBoxSignals } from './QAbstractSpinBox';
import { QCalendarWidget } from './QCalendarWidget';
import { QDate } from '../QtCore/QDate';
import { QDateTime } from '../QtCore/QDateTime';
import { QTime } from '../QtCore/QTime';
import { TimeSpec } from '../QtEnums';
export declare abstract class NodeDateTimeEdit extends QAbstractSpinBox<QDateTimeEditSignals> {
    calendar?: QCalendarWidget;
    setCalendarWidget(calendarWidget: QCalendarWidget): void;
    calendarWidget(): QCalendarWidget | null;
    setCalendarPopup(enable: boolean): void;
    calendarPopup(): boolean;
    setDate(date: QDate): void;
    date(): QDate;
    setDateTime(datetime: QDateTime): void;
    dateTime(): QDateTime;
    setDisplayFormat(format: string): void;
    displayFormat(): string;
    setTime(time: QTime): void;
    time(): QTime;
    setTimeSpec(spec: TimeSpec): void;
    timeSpec(): TimeSpec;
}
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
export declare class QDateTimeEdit extends NodeDateTimeEdit {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
}
export interface QDateTimeEditSignals extends QAbstractSpinBoxSignals {
    dateChanged: (date: QDate) => void;
    dateTimeChanged: (datetime: QDateTime) => void;
    timeChanged: (time: QTime) => void;
}
