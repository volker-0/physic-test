"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDialog = exports.NodeDialog = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
const QWidget_1 = require("./QWidget");
// All Dialogs should extend from NodeDialog
// Implement all native QDialog methods here so that all dialogs get access to those aswell
class NodeDialog extends QWidget_1.NodeWidget {
    setResult(i) {
        this.native.setResult(i);
    }
    result() {
        return this.native.result();
    }
    setModal(modal) {
        this.setProperty('modal', modal);
    }
    setSizeGripEnabled(enabled) {
        this.setProperty('sizeGripEnabled', enabled);
    }
    isSizeGripEnabled() {
        return this.property('sizeGripEnabled').toBool();
    }
    exec() {
        return this.native.exec();
    }
    open() {
        this.native.open();
    }
    reject() {
        this.native.reject();
    }
}
exports.NodeDialog = NodeDialog;
/**
 
> This is the base class of dialog windows.

* **This class is a JS wrapper around Qt's [QDialog class](https://doc.qt.io/qt-5/qdialog.html)**

It is inherited by QFileDialog and QMessageBox (n/a QColorDialog, QErrorMessage, QFontDialog, QInputDialog, QMessageBox, QProgressDialog, and QWizard)
 */
class QDialog extends NodeDialog {
    constructor(arg) {
        let native;
        let parent;
        if (helpers_1.checkIfNativeElement(arg)) {
            native = arg;
        }
        else if (arg) {
            parent = arg;
            native = new addon_1.default.QDialog(parent.native);
        }
        else {
            native = new addon_1.default.QDialog();
        }
        super(native);
        this.setNodeParent(parent);
        this.native = native;
    }
}
exports.QDialog = QDialog;
