import { NodeWidget } from './QWidget';
import { NativeElement } from '../core/Component';
import { NodeObject, QObjectSignals } from '../QtCore/QObject';
import { QStandardItem } from './QStandardItem';
export interface QStandardItemModelSignals extends QObjectSignals {
    itemChanged: (item: QStandardItem) => void;
}
export declare class QStandardItemModel extends NodeObject<any> {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
    item(row: number, column?: number): QStandardItem | void;
}
