import { NativeElement, Component } from '../core/Component';
import { QVariant } from './QVariant';
export declare class QSize extends Component {
    native: NativeElement;
    constructor();
    constructor(nativeElement: NativeElement);
    constructor(width?: number, height?: number);
    setWidth(width: number): void;
    width(): number;
    setHeight(height: number): void;
    height(): number;
    static fromQVariant(variant: QVariant): QSize;
}
