"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionMode = exports.SelectionBehavior = exports.ScrollMode = exports.EditTrigger = exports.DragDropMode = exports.QAbstractItemView = void 0;
const QAbstractScrollArea_1 = require("./QAbstractScrollArea");
const QWidget_1 = require("./QWidget");
const QModelIndex_1 = require("../QtCore/QModelIndex");
const QSize_1 = require("../QtCore/QSize");
/**
 
> This is the abstract base class of button widgets, providing their functionality.

* **This class is a JS wrapper around Qt's [QAbstractItemView class](https://doc.qt.io/qt-5/qabstractitemview.html)**

The QAbstractItemView class is an abstract class and therefore, technically, no further instances actually have to be created.
It is inherited by QListWidget. (n/a QColumnView, QHeaderView, QListView, QTableView, and QTreeView)

*/
class QAbstractItemView extends QAbstractScrollArea_1.QAbstractScrollArea {
    setCurrentIndex(index) {
        this.native.setCurrentIndex(index.native);
    }
    currentIndex() {
        return new QModelIndex_1.QModelIndex(this.native.currentIndex());
    }
    setIndexWidget(index, widget) {
        this.native.setIndexWidget(index.native, widget.native);
    }
    indexWidget(index) {
        return new QWidget_1.QWidget(this.native.indexWidget(index));
    }
    scrollToBottom() {
        this.native.scrollToBottom();
    }
    scrollToTop() {
        this.native.scrollToTop();
    }
    setAlternatingRowColors(enable) {
        this.setProperty('alternatingRowColors', enable);
    }
    alternatingRowColors() {
        return this.property('alternatingRowColors').toBool();
    }
    setAutoScroll(enable) {
        this.setProperty('autoScroll', enable);
    }
    hasAutoScroll() {
        return this.property('autoScroll').toBool();
    }
    setAutoScrollMargin(margin) {
        this.setProperty('autoScrollMargin', margin);
    }
    autoScrollMargin() {
        return this.property('autoScrollMargin').toInt();
    }
    setDefaultDropAction(dropAction) {
        this.setProperty('defaultDropAction', dropAction);
    }
    defaultDropAction() {
        return this.property('defaultDropAction').toInt();
    }
    setDragDropMode(behavior) {
        this.setProperty('dragDropMode', behavior);
    }
    dragDropMode() {
        return this.property('dragDropMode').toInt();
    }
    setDragDropOverwriteMode(overwrite) {
        this.setProperty('dragDropOverwriteMode', overwrite);
    }
    dragDropOverwriteMode() {
        return this.property('dragDropOverwriteMode').toBool();
    }
    setDragEnabled(enable) {
        this.setProperty('dragEnabled', enable);
    }
    dragEnabled() {
        return this.property('dragEnabled').toBool();
    }
    setEditTriggers(triggers) {
        this.setProperty('editTriggers', triggers);
    }
    editTriggers() {
        return this.property('editTriggers').toInt();
    }
    setHorizontalScrollMode(mode) {
        this.setProperty('horizontalScrollMode', mode);
    }
    horizontalScrollMode() {
        return this.property('horizontalScrollMode').toInt();
    }
    resetHorizontalScrollMode() {
        this.native.resetHorizontalScrollMode();
    }
    setIconSize(iconSize) {
        this.setProperty('iconSize', iconSize.native);
    }
    iconSize() {
        const iconSize = this.property('iconSize');
        return QSize_1.QSize.fromQVariant(iconSize);
    }
    setSelectionBehavior(behavior) {
        this.setProperty('selectionBehavior', behavior);
    }
    selectionBehavior() {
        return this.property('selectionBehavior').toInt();
    }
    setSelectionMode(mode) {
        this.setProperty('selectionMode', mode);
    }
    selectionMode() {
        return this.property('selectionMode').toInt();
    }
    setDropIndicatorShown(enable) {
        this.setProperty('showDropIndicator', enable);
    }
    showDropIndicator() {
        return this.property('showDropIndicator').toBool();
    }
    setTabKeyNavigation(enable) {
        this.setProperty('tabKeyNavigation', enable);
    }
    tabKeyNavigation() {
        return this.property('tabKeyNavigation').toBool();
    }
    setTextElideMode(mode) {
        this.setProperty('textElideMode', mode);
    }
    textElideMode() {
        return this.property('textElideMode').toInt();
    }
    setVerticalScrollMode(mode) {
        this.setProperty('verticalScrollMode', mode);
    }
    verticalScrollMode() {
        return this.property('verticalScrollMode').toInt();
    }
    resetVerticalScrollMode() {
        this.native.resetVerticalScrollMode();
    }
}
exports.QAbstractItemView = QAbstractItemView;
var DragDropMode;
(function (DragDropMode) {
    DragDropMode[DragDropMode["NoDragDrop"] = 0] = "NoDragDrop";
    DragDropMode[DragDropMode["DragOnly"] = 1] = "DragOnly";
    DragDropMode[DragDropMode["DropOnly"] = 2] = "DropOnly";
    DragDropMode[DragDropMode["DragDrop"] = 3] = "DragDrop";
    DragDropMode[DragDropMode["InternalMove"] = 4] = "InternalMove";
})(DragDropMode = exports.DragDropMode || (exports.DragDropMode = {}));
var EditTrigger;
(function (EditTrigger) {
    EditTrigger[EditTrigger["NoEditTriggers"] = 0] = "NoEditTriggers";
    EditTrigger[EditTrigger["CurrentChanged"] = 1] = "CurrentChanged";
    EditTrigger[EditTrigger["DoubleClicked"] = 2] = "DoubleClicked";
    EditTrigger[EditTrigger["SelectedClicked"] = 4] = "SelectedClicked";
    EditTrigger[EditTrigger["EditKeyPressed"] = 8] = "EditKeyPressed";
    EditTrigger[EditTrigger["AnyKeyPressed"] = 16] = "AnyKeyPressed";
    EditTrigger[EditTrigger["AllEditTriggers"] = 31] = "AllEditTriggers";
})(EditTrigger = exports.EditTrigger || (exports.EditTrigger = {}));
var ScrollMode;
(function (ScrollMode) {
    ScrollMode[ScrollMode["ScrollPerItem"] = 0] = "ScrollPerItem";
    ScrollMode[ScrollMode["ScrollPerPixel"] = 1] = "ScrollPerPixel";
})(ScrollMode = exports.ScrollMode || (exports.ScrollMode = {}));
var SelectionBehavior;
(function (SelectionBehavior) {
    SelectionBehavior[SelectionBehavior["SelectItems"] = 0] = "SelectItems";
    SelectionBehavior[SelectionBehavior["SelectRows"] = 1] = "SelectRows";
    SelectionBehavior[SelectionBehavior["SelectColumns"] = 2] = "SelectColumns";
})(SelectionBehavior = exports.SelectionBehavior || (exports.SelectionBehavior = {}));
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["NoSelection"] = 0] = "NoSelection";
    SelectionMode[SelectionMode["SingleSelection"] = 1] = "SingleSelection";
    SelectionMode[SelectionMode["MultiSelection"] = 2] = "MultiSelection";
    SelectionMode[SelectionMode["ExtendedSelection"] = 3] = "ExtendedSelection";
    SelectionMode[SelectionMode["ContiguousSelection"] = 4] = "ContiguousSelection";
})(SelectionMode = exports.SelectionMode || (exports.SelectionMode = {}));
