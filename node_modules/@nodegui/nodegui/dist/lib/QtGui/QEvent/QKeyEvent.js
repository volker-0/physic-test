"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QKeyEvent = void 0;
const addon_1 = __importDefault(require("../../utils/addon"));
class QKeyEvent {
    constructor(event) {
        this.native = new addon_1.default.QKeyEvent(event);
    }
    text() {
        return this.native.text();
    }
    key() {
        return this.native.key();
    }
    modifiers() {
        return this.native.modifiers();
    }
    count() {
        return this.native.count();
    }
    isAutoRepeat() {
        return this.native.isAutoRepeat();
    }
}
exports.QKeyEvent = QKeyEvent;
