"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QSize = void 0;
const Component_1 = require("../core/Component");
const addon_1 = __importDefault(require("../utils/addon"));
const helpers_1 = require("../utils/helpers");
class QSize extends Component_1.Component {
    constructor(arg, height) {
        super();
        if (!arg) {
            this.native = new addon_1.default.QSize();
        }
        else if (helpers_1.checkIfNativeElement(arg)) {
            this.native = arg;
        }
        else {
            this.native = new addon_1.default.QSize(arg, height);
        }
    }
    setWidth(width) {
        return this.native.setWidth(width);
    }
    width() {
        return this.native.width();
    }
    setHeight(height) {
        return this.native.setHeight(height);
    }
    height() {
        return this.native.height();
    }
    static fromQVariant(variant) {
        return new QSize(addon_1.default.QSize.fromQVariant(variant.native));
    }
}
exports.QSize = QSize;
