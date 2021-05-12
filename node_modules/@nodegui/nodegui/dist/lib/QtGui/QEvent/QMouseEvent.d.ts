import { NativeElement, NativeRawPointer } from '../../core/Component';
export declare class QMouseEvent {
    native: NativeElement;
    constructor(event: NativeRawPointer<'QEvent'>);
    button(): number;
    x(): number;
    y(): number;
    globalX(): number;
    globalY(): number;
}
