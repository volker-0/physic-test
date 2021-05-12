import { NativeElement, NativeRawPointer } from '../../core/Component';
export declare class QKeyEvent {
    native: NativeElement;
    constructor(event: NativeRawPointer<'QEvent'>);
    text(): string;
    key(): number;
    modifiers(): number;
    count(): number;
    isAutoRepeat(): boolean;
}
