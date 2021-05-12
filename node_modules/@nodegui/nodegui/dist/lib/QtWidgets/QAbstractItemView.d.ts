import { QAbstractScrollArea, QAbstractScrollAreaSignals } from './QAbstractScrollArea';
import { QWidget } from './QWidget';
import { QModelIndex } from '../QtCore/QModelIndex';
import { QSize } from '../QtCore/QSize';
import { DropAction } from '../QtEnums/DropAction';
import { TextElideMode } from '../QtEnums/TextElideMode';
/**
 
> This is the abstract base class of button widgets, providing their functionality.

* **This class is a JS wrapper around Qt's [QAbstractItemView class](https://doc.qt.io/qt-5/qabstractitemview.html)**

The QAbstractItemView class is an abstract class and therefore, technically, no further instances actually have to be created.
It is inherited by QListWidget. (n/a QColumnView, QHeaderView, QListView, QTableView, and QTreeView)

*/
export declare abstract class QAbstractItemView<Signals extends QAbstractItemViewSignals> extends QAbstractScrollArea<Signals> {
    setCurrentIndex(index: QModelIndex): void;
    currentIndex(): QModelIndex;
    setIndexWidget(index: QModelIndex, widget: QWidget): void;
    indexWidget(index: QModelIndex): QWidget;
    scrollToBottom(): void;
    scrollToTop(): void;
    setAlternatingRowColors(enable: boolean): void;
    alternatingRowColors(): boolean;
    setAutoScroll(enable: boolean): void;
    hasAutoScroll(): boolean;
    setAutoScrollMargin(margin: number): void;
    autoScrollMargin(): number;
    setDefaultDropAction(dropAction: DropAction): void;
    defaultDropAction(): DropAction;
    setDragDropMode(behavior: DragDropMode): void;
    dragDropMode(): DragDropMode;
    setDragDropOverwriteMode(overwrite: boolean): void;
    dragDropOverwriteMode(): boolean;
    setDragEnabled(enable: boolean): void;
    dragEnabled(): boolean;
    setEditTriggers(triggers: number): void;
    editTriggers(): number;
    setHorizontalScrollMode(mode: boolean): void;
    horizontalScrollMode(): ScrollMode;
    resetHorizontalScrollMode(): void;
    setIconSize(iconSize: QSize): void;
    iconSize(): QSize;
    setSelectionBehavior(behavior: SelectionBehavior): void;
    selectionBehavior(): SelectionBehavior;
    setSelectionMode(mode: SelectionMode): void;
    selectionMode(): SelectionMode;
    setDropIndicatorShown(enable: boolean): void;
    showDropIndicator(): boolean;
    setTabKeyNavigation(enable: boolean): void;
    tabKeyNavigation(): boolean;
    setTextElideMode(mode: TextElideMode): void;
    textElideMode(): TextElideMode;
    setVerticalScrollMode(mode: ScrollMode): void;
    verticalScrollMode(): ScrollMode;
    resetVerticalScrollMode(): void;
}
export declare enum DragDropMode {
    NoDragDrop = 0,
    DragOnly = 1,
    DropOnly = 2,
    DragDrop = 3,
    InternalMove = 4
}
export declare enum EditTrigger {
    NoEditTriggers = 0,
    CurrentChanged = 1,
    DoubleClicked = 2,
    SelectedClicked = 4,
    EditKeyPressed = 8,
    AnyKeyPressed = 16,
    AllEditTriggers = 31
}
export declare enum ScrollMode {
    ScrollPerItem = 0,
    ScrollPerPixel = 1
}
export declare enum SelectionBehavior {
    SelectItems = 0,
    SelectRows = 1,
    SelectColumns = 2
}
export declare enum SelectionMode {
    NoSelection = 0,
    SingleSelection = 1,
    MultiSelection = 2,
    ExtendedSelection = 3,
    ContiguousSelection = 4
}
export interface QAbstractItemViewSignals extends QAbstractScrollAreaSignals {
    viewportEntered: () => void;
}
