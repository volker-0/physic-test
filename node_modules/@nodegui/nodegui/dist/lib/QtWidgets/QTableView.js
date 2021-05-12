"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QTableView = exports.NodeTableView = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QAbstractItemView_1 = require("./QAbstractItemView");
/**
 
> The QTableView class provides a default model/view implementation of a table view.

* **This class is a JS wrapper around Qt's [QTableView class](https://doc.qt.io/qt-5/qtableview.html)**

### Example

```javascript
const { QTableView } = require("@nodegui/nodegui");

const tableview = new QTableView();

```
 */
class NodeTableView extends QAbstractItemView_1.QAbstractItemView {
    setCornerButtonEnabled(enable) {
        this.setProperty('cornerButtonEnabled', enable);
    }
    isCornerButtonEnabled() {
        return this.property('cornerButtonEnabled').toBool();
    }
    setGridStyle(style) {
        this.setProperty('gridStyle', style);
    }
    gridStyle() {
        return this.property('gridStyle').toInt();
    }
    setShowGrid(show) {
        this.setProperty('showGrid', show);
    }
    showGrid() {
        return this.property('showGrid').toBool();
    }
    setSortingEnabled(enable) {
        this.setProperty('sortingEnabled', enable);
    }
    isSortingEnabled() {
        return this.property('sortingEnabled').toBool();
    }
    setWordWrap(on) {
        this.setProperty('wordWrap', on);
    }
    wordWrap() {
        return this.property('wordWrap').toBool();
    }
    clearSpans() {
        this.native.clearSpans();
    }
    columnAt(x) {
        return this.native.columnAt(x);
    }
    columnSpan(row, column) {
        return this.native.columnSpan(row, column);
    }
    columnViewportPosition(column) {
        return this.native.columnViewportPosition(column);
    }
    setColumnWidth(column, width) {
        this.native.setColumnWidth(column, width);
    }
    columnWidth(column) {
        return this.native.columnWidth(column);
    }
    setColumnHidden(column, hide) {
        this.native.setColumnHidden(column, hide);
    }
    isColumnHidden(column) {
        return this.native.isColumnHidden(column);
    }
    setRowHidden(row, hide) {
        this.native.setRowHidden(row, hide);
    }
    isRowHidden(row) {
        return this.native.isRowHidden(row);
    }
    rowAt(y) {
        return this.native.rowAt(y);
    }
    setRowHeight(row, height) {
        this.native.setRowHeight(row, height);
    }
    rowHeight(row) {
        return this.native.rowHeight(row);
    }
    rowSpan(row, column) {
        return this.native.rowSpan(row, column);
    }
    rowViewportPosition(row) {
        return this.native.rowViewportPosition(row);
    }
    setSpan(row, column, rowSpanCount, columnSpanCount) {
        this.native.setSpan(row, column, rowSpanCount, columnSpanCount);
    }
    hideColumn(column) {
        this.native.hideColumn(column);
    }
    hideRow(row) {
        this.native.hideRow(row);
    }
    resizeColumnToContents(column) {
        this.native.resizeColumnToContents(column);
    }
    resizeColumnsToContents() {
        this.native.resizeColumnsToContents();
    }
    resizeRowToContents(row) {
        this.native.resizeRowToContents(row);
    }
    resizeRowsToContents() {
        this.native.resizeRowsToContents();
    }
    selectColumn(column) {
        this.native.selectColumn(column);
    }
    selectRow(row) {
        this.native.selectRow(row);
    }
    showColumn(column) {
        this.native.showColumn(column);
    }
    showRow(row) {
        this.native.showRow(row);
    }
    sortByColumn(column, order) {
        this.native.sortByColumn(column, order);
    }
}
exports.NodeTableView = NodeTableView;
class QTableView extends NodeTableView {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QTableView(parent.native);
        }
        else {
            native = new addon_1.default.QTableView();
        }
        super(native);
        this.native = native;
        parent && this.setNodeParent(parent);
    }
}
exports.QTableView = QTableView;
