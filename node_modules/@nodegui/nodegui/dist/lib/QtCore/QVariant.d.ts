import { NativeElement, Component } from '../core/Component';
export declare type QVariantType = NativeElement | string | number | boolean;
export declare class QVariant extends Component {
    native: NativeElement;
    constructor();
    constructor(nativeElement: NativeElement);
    constructor(variant: QVariantType);
    toString(): string;
    toInt(): number;
    toDouble(): number;
    toBool(): boolean;
}
