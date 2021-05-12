"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QButtonGroup = void 0;
const addon_1 = __importDefault(require("../utils/addon"));
const QObject_1 = require("../QtCore/QObject");
class QButtonGroup extends QObject_1.NodeObject {
    constructor(parent) {
        let native;
        if (parent) {
            native = new addon_1.default.QButtonGroup(parent.native);
        }
        else {
            native = new addon_1.default.QButtonGroup();
        }
        super(native);
        this.native = native;
        parent && parent.nodeChildren.add(this);
    }
    addButton(button, id = -1) {
        this.native.addButton(button.native, id);
        this.nodeChildren.add(button);
    }
    removeButton(button) {
        this.native.removeButton(button.native);
        this.nodeChildren.delete(button);
    }
    setExclusive(exculsive) {
        this.native.setProperty('exclusive', exculsive);
    }
    checkedId() {
        return this.native.checkedId();
    }
    exclusive() {
        return this.property('exclusive').toBool();
    }
    setId(button, id) {
        this.native.setId(button.native, id);
    }
    id(button) {
        return this.native.id(button.native);
    }
    buttons() {
        return this.native.buttons();
    }
    checkedButton() {
        return this.native.checkedButton();
    }
    button(id) {
        return this.native.button(id);
    }
}
exports.QButtonGroup = QButtonGroup;
