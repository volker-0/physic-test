"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QStandardItemModel = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QObject_1 = require("../QtCore/QObject");
const QStandardItem_1 = require("./QStandardItem");
class QStandardItemModel extends QObject_1.NodeObject {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QStandardItemModel(parent.native);
        }
        else {
            native = new addon_1.default.QStandardItemModel();
        }
        super(native);
        this.native = native;
        parent && parent.nodeChildren.add(this);
    }
    item(row, column = 0) {
        const item = this.native.item(row, column);
        if (item) {
            return new QStandardItem_1.QStandardItem(item);
        }
        else {
            return undefined;
        }
    }
}
exports.QStandardItemModel = QStandardItemModel;
