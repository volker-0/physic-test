import { NodeWidget, QWidget } from './QWidget';
import { NativeElement, Component } from '../core/Component';
import { QListWidgetItem } from './QListWidgetItem';
import { NodeListView, QListViewSignals } from './QListView';
import { QRect } from '../QtCore/QRect';
import { SortOrder, ScrollHint, MatchFlag } from '../QtEnums';
/**
 
> Create and control a item-based list.

* **This class is a JS wrapper around Qt's [QListWidget class](https://doc.qt.io/qt-5/qlistwidget.html)**

### Example

```javascript
const { QListWidget, QListWidgetItem } = require("@nodegui/nodegui");

const listWidget = new QListWidget();

for (let i = 0; i < 30; i++) {
  let listWidgetItem = new QListWidgetItem();
  listWidgetItem.setText('listWidgetItem ' + i);
  if (i===3) {
    listWidgetItem.setCheckState(2);
  } else {
    listWidgetItem.setCheckState(0);
  }
  listWidget.addItem(listWidgetItem);
}
```
 */
export declare class QListWidget extends NodeListView<QListWidgetSignals> {
    native: NativeElement;
    items: Set<NativeElement | Component>;
    constructor();
    constructor(parent: NodeWidget<any>);
    count(): number;
    setCurrentRow(row: number): void;
    currentRow(): number;
    setSortingEnabled(enable: boolean): void;
    isSortingEnabled(): boolean;
    addItem(item: QListWidgetItem): void;
    addItems(labels: string[]): void;
    closePersistentEditor(item: QListWidgetItem): void;
    currentItem(): QListWidgetItem;
    editItem(item: Component): void;
    findItems(text: string, flags: MatchFlag): QListWidgetItem[];
    insertItem(row: number, item: QListWidgetItem): void;
    insertItems(row: number, labels: string[]): void;
    isPersistentEditorOpen(item: QListWidgetItem): boolean;
    item(row: number): QListWidgetItem;
    itemAt(x: number, y: number): QListWidgetItem;
    itemWidget(item: QListWidgetItem): QWidget;
    openPersistentEditor(item: QListWidgetItem): void;
    removeItemWidget(item: QListWidgetItem): void;
    row(item: QListWidgetItem): number;
    selectedItems(): QListWidgetItem[];
    setCurrentItem(item: QListWidgetItem): void;
    setItemWidget(item: QListWidgetItem, widget: NodeWidget<any>): void;
    sortItems(order?: SortOrder): void;
    takeItem(row: number): void;
    visualItemRect(item: QListWidgetItem): QRect;
    clear(): void;
    scrollToItem(item: QListWidgetItem, hint?: ScrollHint): void;
}
export interface QListWidgetSignals extends QListViewSignals {
    currentItemChanged: (current: QListWidgetItem, previous: QListWidgetItem) => void;
    currentRowChanged: (currentRow: number) => void;
    currentTextChanged: (currentText: string) => void;
    itemActivated: (item: QListWidgetItem) => void;
    itemChanged: (item: QListWidgetItem) => void;
    itemClicked: (item: QListWidgetItem) => void;
    itemDoubleClicked: (item: QListWidgetItem) => void;
    itemEntered: (item: QListWidgetItem) => void;
    itemPressed: (item: QListWidgetItem) => void;
    itemSelectionChanged: () => void;
}
