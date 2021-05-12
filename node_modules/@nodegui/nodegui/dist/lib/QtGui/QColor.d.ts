import { Component, NativeElement } from '../core/Component';
import { QVariant } from '../QtCore/QVariant';
import { GlobalColor } from '../QtEnums';
export declare class QColor extends Component {
    native: NativeElement;
    constructor();
    constructor(nativeElement: NativeElement);
    constructor(colorString: string);
    constructor(color: GlobalColor);
    constructor(r?: number, g?: number, b?: number, a?: number);
    setRed(value: number): void;
    red(): number;
    setGreen(value: number): void;
    green(): number;
    setBlue(value: number): void;
    blue(): number;
    setAlpha(value: number): void;
    alpha(): number;
    static fromQVariant(variant: QVariant): QColor;
}
