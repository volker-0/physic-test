import { EventWidget } from '../core/EventWidget';
import { NativeElement } from '../core/Component';
import { QVariant, QVariantType } from './QVariant';
export declare abstract class NodeObject<Signals extends QObjectSignals> extends EventWidget<Signals> {
    inherits(className: string): boolean;
    setProperty(name: string, value: QVariantType): boolean;
    property(name: string): QVariant;
    setObjectName(objectName: string): void;
    objectName(): string;
}
export interface QObjectSignals {
    objectNameChanged: (objectName: string) => void;
}
export declare class QObject extends NodeObject<QObjectSignals> {
    native: NativeElement;
    constructor();
    constructor(nativeElement: NativeElement);
    constructor(parent: NodeObject<any>);
}
