"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QStylePixelMetric = exports.QStyle = void 0;
const Component_1 = require("../core/Component");
const helpers_1 = require("../utils/helpers");
class QStyle extends Component_1.Component {
    constructor(native) {
        super();
        if (helpers_1.checkIfNativeElement(native)) {
            this.native = native;
        }
        else {
            throw new Error('QStyle cannot be initialised this way. Use QApplication::style()');
        }
    }
    pixelMetric(metric) {
        return this.native.pixelMetric(metric);
    }
}
exports.QStyle = QStyle;
var QStylePixelMetric;
(function (QStylePixelMetric) {
    QStylePixelMetric[QStylePixelMetric["PM_ButtonMargin"] = 0] = "PM_ButtonMargin";
    QStylePixelMetric[QStylePixelMetric["PM_ButtonDefaultIndicator"] = 1] = "PM_ButtonDefaultIndicator";
    QStylePixelMetric[QStylePixelMetric["PM_MenuButtonIndicator"] = 2] = "PM_MenuButtonIndicator";
    QStylePixelMetric[QStylePixelMetric["PM_ButtonShiftHorizontal"] = 3] = "PM_ButtonShiftHorizontal";
    QStylePixelMetric[QStylePixelMetric["PM_ButtonShiftVertical"] = 4] = "PM_ButtonShiftVertical";
    QStylePixelMetric[QStylePixelMetric["PM_DefaultFrameWidth"] = 5] = "PM_DefaultFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_SpinBoxFrameWidth"] = 6] = "PM_SpinBoxFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_ComboBoxFrameWidth"] = 7] = "PM_ComboBoxFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_MaximumDragDistance"] = 8] = "PM_MaximumDragDistance";
    QStylePixelMetric[QStylePixelMetric["PM_ScrollBarExtent"] = 9] = "PM_ScrollBarExtent";
    QStylePixelMetric[QStylePixelMetric["PM_ScrollBarSliderMin"] = 10] = "PM_ScrollBarSliderMin";
    QStylePixelMetric[QStylePixelMetric["PM_SliderThickness"] = 11] = "PM_SliderThickness";
    QStylePixelMetric[QStylePixelMetric["PM_SliderControlThickness"] = 12] = "PM_SliderControlThickness";
    QStylePixelMetric[QStylePixelMetric["PM_SliderLength"] = 13] = "PM_SliderLength";
    QStylePixelMetric[QStylePixelMetric["PM_SliderTickmarkOffset"] = 14] = "PM_SliderTickmarkOffset";
    QStylePixelMetric[QStylePixelMetric["PM_SliderSpaceAvailable"] = 15] = "PM_SliderSpaceAvailable";
    QStylePixelMetric[QStylePixelMetric["PM_DockWidgetSeparatorExtent"] = 16] = "PM_DockWidgetSeparatorExtent";
    QStylePixelMetric[QStylePixelMetric["PM_DockWidgetHandleExtent"] = 17] = "PM_DockWidgetHandleExtent";
    QStylePixelMetric[QStylePixelMetric["PM_DockWidgetFrameWidth"] = 18] = "PM_DockWidgetFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_MenuBarPanelWidth"] = 33] = "PM_MenuBarPanelWidth";
    QStylePixelMetric[QStylePixelMetric["PM_MenuBarItemSpacing"] = 34] = "PM_MenuBarItemSpacing";
    QStylePixelMetric[QStylePixelMetric["PM_MenuBarHMargin"] = 36] = "PM_MenuBarHMargin";
    QStylePixelMetric[QStylePixelMetric["PM_MenuBarVMargin"] = 35] = "PM_MenuBarVMargin";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarTabOverlap"] = 19] = "PM_TabBarTabOverlap";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarTabHSpace"] = 20] = "PM_TabBarTabHSpace";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarTabVSpace"] = 21] = "PM_TabBarTabVSpace";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarBaseHeight"] = 22] = "PM_TabBarBaseHeight";
    QStylePixelMetric[QStylePixelMetric["PM_TabBarBaseOverlap"] = 23] = "PM_TabBarBaseOverlap";
    QStylePixelMetric[QStylePixelMetric["PM_ProgressBarChunkWidth"] = 24] = "PM_ProgressBarChunkWidth";
    QStylePixelMetric[QStylePixelMetric["PM_SplitterWidth"] = 25] = "PM_SplitterWidth";
    QStylePixelMetric[QStylePixelMetric["PM_TitleBarHeight"] = 26] = "PM_TitleBarHeight";
    QStylePixelMetric[QStylePixelMetric["PM_IndicatorWidth"] = 37] = "PM_IndicatorWidth";
    QStylePixelMetric[QStylePixelMetric["PM_IndicatorHeight"] = 38] = "PM_IndicatorHeight";
    QStylePixelMetric[QStylePixelMetric["PM_ExclusiveIndicatorWidth"] = 39] = "PM_ExclusiveIndicatorWidth";
    QStylePixelMetric[QStylePixelMetric["PM_ExclusiveIndicatorHeight"] = 40] = "PM_ExclusiveIndicatorHeight";
    QStylePixelMetric[QStylePixelMetric["PM_MenuPanelWidth"] = 30] = "PM_MenuPanelWidth";
    QStylePixelMetric[QStylePixelMetric["PM_MenuHMargin"] = 28] = "PM_MenuHMargin";
    QStylePixelMetric[QStylePixelMetric["PM_MenuVMargin"] = 29] = "PM_MenuVMargin";
    QStylePixelMetric[QStylePixelMetric["PM_MenuScrollerHeight"] = 27] = "PM_MenuScrollerHeight";
    QStylePixelMetric[QStylePixelMetric["PM_MenuTearoffHeight"] = 31] = "PM_MenuTearoffHeight";
    QStylePixelMetric[QStylePixelMetric["PM_MenuDesktopFrameWidth"] = 32] = "PM_MenuDesktopFrameWidth";
    QStylePixelMetric[QStylePixelMetric["PM_CheckListButtonSize"] = 41] = "PM_CheckListButtonSize";
    QStylePixelMetric[QStylePixelMetric["PM_CheckListControllerSize"] = 42] = "PM_CheckListControllerSize";
    QStylePixelMetric[QStylePixelMetric["PM_MdiSubWindowFrameWidth"] = 46] = "PM_MdiSubWindowFrameWidth";
})(QStylePixelMetric = exports.QStylePixelMetric || (exports.QStylePixelMetric = {}));
