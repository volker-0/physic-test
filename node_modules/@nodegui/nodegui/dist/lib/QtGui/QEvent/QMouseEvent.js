"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QMouseEvent = void 0;
const addon_1 = __importDefault(require("../../utils/addon"));
class QMouseEvent {
    constructor(event) {
        this.native = new addon_1.default.QMouseEvent(event);
    }
    button() {
        return this.native.button();
    }
    x() {
        return this.native.x();
    }
    y() {
        return this.native.y();
    }
    globalX() {
        return this.native.globalX();
    }
    globalY() {
        return this.native.globalY();
    }
}
exports.QMouseEvent = QMouseEvent;
