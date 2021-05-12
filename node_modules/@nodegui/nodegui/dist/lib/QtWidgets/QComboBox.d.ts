import { NodeWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { SizeAdjustPolicy } from '../QtEnums';
import { QIcon } from '../QtGui/QIcon';
import { QVariant } from '../QtCore/QVariant';
import { QStandardItemModel } from './QStandardItemModel';
/**
 
> Create and control a selectable drop down menu.

* **This class is a JS wrapper around Qt's [QComboBox class](https://doc.qt.io/qt-5/qcombobox.html)**

A `QComboBox` provides a means of presenting a list of options to the user.

### Example

```javascript
const { QComboBox } = require("@nodegui/nodegui");

const comboBox = new QComboBox();
comboBox.addItem(undefined, 'comboBox item 0');
comboBox.addItem(undefined, 'comboBox item 1');
comboBox.addItem(undefined, 'comboBox item 2');
comboBox.addItem(undefined, 'comboBox item 3');

comboBox.addEventListener('currentTextChanged', (text) => {
    console.log('currentTextChanged: ' + text);
});

comboBox.addEventListener('currentIndexChanged', (index) => {
    console.log('currentIndexChanged: ' + index);
});
```
 */
export declare class QComboBox extends NodeWidget<QComboBoxSignals> {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
    addItem(icon: QIcon | undefined, text: string, userData?: QVariant): void;
    insertItem(index: number, icon: QIcon | undefined, text: string, userData?: QVariant): void;
    addItems(texts: string[]): void;
    insertItems(index: number, texts: string[]): void;
    currentIndex(): number;
    currentText(): string;
    insertSeparator(index: number): void;
    itemText(index: number): string;
    itemData(index: number): QVariant;
    removeItem(index: number): void;
    sizeAdjustPolicy(): number;
    setSizeAdjustPolicy(policy: SizeAdjustPolicy): void;
    maxVisibleItems(): number;
    setMaxVisibleItems(index: number): void;
    isEditable(): boolean;
    setEditable(editable: boolean): void;
    clear(): void;
    setCurrentText(text: string): void;
    setCurrentIndex(index: number): void;
    setModel(model: QStandardItemModel): void;
    setEditText(text: string): void;
}
export declare enum InsertPolicy {
    NoInsert = 0,
    InsertAtTop = 1,
    InsertAtCurrent = 2,
    InsertAtBottom = 3,
    InsertAfterCurrent = 4,
    InsertBeforeCurrent = 5,
    InsertAlphabetically = 6
}
export interface QComboBoxSignals extends QWidgetSignals {
    currentIndexChanged: (index: number) => void;
    currentTextChanged: (text: string) => void;
    editTextChanged: (text: string) => void;
}
