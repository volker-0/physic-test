import { NodeWidget } from './QWidget';
import { NativeElement, NativeRawPointer } from '../core/Component';
import { NodeObject, QObjectSignals } from '../QtCore/QObject';
import { QAbstractButton, QAbstractButtonSignals } from './QAbstractButton';
export interface QButtonGroupSignals extends QObjectSignals {
    buttonClicked: (id?: number) => void;
}
export declare class QButtonGroup extends NodeObject<any> {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
    addButton(button: QAbstractButton<QAbstractButtonSignals>, id?: number): void;
    removeButton(button: QAbstractButton<QAbstractButtonSignals>): void;
    setExclusive(exculsive: boolean): void;
    checkedId(): number;
    exclusive(): boolean;
    setId(button: QAbstractButton<QAbstractButtonSignals>, id: number): void;
    id(button: QAbstractButton<QAbstractButtonSignals>): number;
    buttons(): QAbstractButton<QAbstractButtonSignals>[];
    checkedButton(): NativeRawPointer<'QAbstractButton*'>;
    button(id: number): NativeRawPointer<'QAbstractButton*'>;
}
