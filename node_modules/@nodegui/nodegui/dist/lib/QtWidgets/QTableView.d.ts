import { NodeWidget } from './QWidget';
import { NativeElement } from '../core/Component';
import { SortOrder, PenStyle } from '../QtEnums';
import { QAbstractItemView, QAbstractItemViewSignals } from './QAbstractItemView';
/**
 
> The QTableView class provides a default model/view implementation of a table view.

* **This class is a JS wrapper around Qt's [QTableView class](https://doc.qt.io/qt-5/qtableview.html)**

### Example

```javascript
const { QTableView } = require("@nodegui/nodegui");

const tableview = new QTableView();

```
 */
export declare abstract class NodeTableView<Signals extends QTableViewSignals> extends QAbstractItemView<Signals> {
    setCornerButtonEnabled(enable: boolean): void;
    isCornerButtonEnabled(): boolean;
    setGridStyle(style: PenStyle): void;
    gridStyle(): PenStyle;
    setShowGrid(show: boolean): void;
    showGrid(): boolean;
    setSortingEnabled(enable: boolean): void;
    isSortingEnabled(): boolean;
    setWordWrap(on: boolean): void;
    wordWrap(): boolean;
    clearSpans(): void;
    columnAt(x: number): number;
    columnSpan(row: number, column: number): number;
    columnViewportPosition(column: number): number;
    setColumnWidth(column: number, width: number): void;
    columnWidth(column: number): number;
    setColumnHidden(column: number, hide: boolean): void;
    isColumnHidden(column: number): boolean;
    setRowHidden(row: number, hide: boolean): void;
    isRowHidden(row: number): boolean;
    rowAt(y: number): number;
    setRowHeight(row: number, height: number): void;
    rowHeight(row: number): number;
    rowSpan(row: number, column: number): number;
    rowViewportPosition(row: number): number;
    setSpan(row: number, column: number, rowSpanCount: number, columnSpanCount: number): void;
    hideColumn(column: number): void;
    hideRow(row: number): void;
    resizeColumnToContents(column: number): void;
    resizeColumnsToContents(): void;
    resizeRowToContents(row: number): void;
    resizeRowsToContents(): void;
    selectColumn(column: number): void;
    selectRow(row: number): void;
    showColumn(column: number): void;
    showRow(row: number): void;
    sortByColumn(column: number, order: SortOrder): void;
}
export declare class QTableView extends NodeTableView<QTableViewSignals> {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
}
export declare type QTableViewSignals = QAbstractItemViewSignals;
