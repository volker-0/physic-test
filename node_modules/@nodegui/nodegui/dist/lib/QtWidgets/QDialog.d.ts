import { NativeElement } from '../core/Component';
import { NodeWidget, QWidgetSignals } from './QWidget';
import { DialogCode } from '../QtEnums';
export declare abstract class NodeDialog<Signals extends QDialogSignals> extends NodeWidget<Signals> {
    setResult(i: number): void;
    result(): number;
    setModal(modal: boolean): void;
    setSizeGripEnabled(enabled: boolean): void;
    isSizeGripEnabled(): boolean;
    exec(): DialogCode;
    open(): void;
    reject(): void;
}
/**
 
> This is the base class of dialog windows.

* **This class is a JS wrapper around Qt's [QDialog class](https://doc.qt.io/qt-5/qdialog.html)**

It is inherited by QFileDialog and QMessageBox (n/a QColorDialog, QErrorMessage, QFontDialog, QInputDialog, QMessageBox, QProgressDialog, and QWizard)
 */
export declare class QDialog extends NodeDialog<QDialogSignals> {
    native: NativeElement;
    constructor(arg?: NodeDialog<QDialogSignals> | NativeElement);
}
export interface QDialogSignals extends QWidgetSignals {
    accepted: () => void;
    finished: (result: number) => void;
    rejected: () => void;
}
