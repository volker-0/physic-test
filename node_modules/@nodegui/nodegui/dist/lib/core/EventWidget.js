"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetEventTypes = exports.EventWidget = void 0;
const events_1 = require("events");
const Component_1 = require("./Component");
const helpers_1 = require("../utils/helpers");
function addDefaultErrorHandler(native, emitter) {
    native.subscribeToQtEvent('error');
    emitter.addListener('error', () => null);
}
/**
 
> Abstract class that adds event handling support to all widgets.

**This class implements an event emitter and merges it with Qt's event and signal system. It allows us to register and unregister event and signal listener at will from javascript**

`EventWidget` is an abstract class and hence no instances of the same should be created. It exists so that we can add event handling functionalities to all widget's easily. This is an internal class.

### Example

```javascript
const { QWidget, QWidgetSignals, WidgetEventTypes } = require("@nodegui/nodegui");

const view = new QWidget();
// You either listen for a widget's signal
view.addEventListener('windowTitleChanged', () => {
  console.log("window title changed");
});

// or you can listen for an event

view.addEventListener(WidgetEventTypes.MouseMove, () => {
  console.log("mouse moved");
});
```
 */
class EventWidget extends Component_1.Component {
    constructor(native) {
        super();
        if (native.initNodeEventEmitter) {
            this.emitter = new events_1.EventEmitter();
            this.emitter.emit = helpers_1.wrapWithActivateUvLoop(this.emitter.emit.bind(this.emitter));
            native.initNodeEventEmitter(this.emitter.emit);
        }
        else {
            throw new Error('initNodeEventEmitter not implemented on native side');
        }
        addDefaultErrorHandler(native, this.emitter);
    }
    addEventListener(eventOrSignalType, callback) {
        this.native.subscribeToQtEvent(eventOrSignalType);
        this.emitter.addListener(eventOrSignalType, callback);
    }
    removeEventListener(eventOrSignalType, callback) {
        if (callback) {
            this.emitter.removeListener(eventOrSignalType, callback);
        }
        else {
            this.emitter.removeAllListeners(eventOrSignalType);
        }
        if (this.emitter.listenerCount(eventOrSignalType) < 1) {
            this.native.unSubscribeToQtEvent(eventOrSignalType);
        }
    }
}
exports.EventWidget = EventWidget;
var WidgetEventTypes;
(function (WidgetEventTypes) {
    WidgetEventTypes["None"] = "None";
    WidgetEventTypes["ActionAdded"] = "ActionAdded";
    WidgetEventTypes["ActionChanged"] = "ActionChanged";
    WidgetEventTypes["ActionRemoved"] = "ActionRemoved";
    WidgetEventTypes["ActivationChange"] = "ActivationChange";
    WidgetEventTypes["ApplicationActivate"] = "ApplicationActivate";
    WidgetEventTypes["ApplicationActivated"] = "ApplicationActivated";
    WidgetEventTypes["ApplicationDeactivate"] = "ApplicationDeactivate";
    WidgetEventTypes["ApplicationFontChange"] = "ApplicationFontChange";
    WidgetEventTypes["ApplicationLayoutDirectionChange"] = "ApplicationLayoutDirectionChange";
    WidgetEventTypes["ApplicationPaletteChange"] = "ApplicationPaletteChange";
    WidgetEventTypes["ApplicationStateChange"] = "ApplicationStateChange";
    WidgetEventTypes["ApplicationWindowIconChange"] = "ApplicationWindowIconChange";
    WidgetEventTypes["ChildAdded"] = "ChildAdded";
    WidgetEventTypes["ChildPolished"] = "ChildPolished";
    WidgetEventTypes["ChildRemoved"] = "ChildRemoved";
    WidgetEventTypes["Clipboard"] = "Clipboard";
    WidgetEventTypes["Close"] = "Close";
    WidgetEventTypes["CloseSoftwareInputPanel"] = "CloseSoftwareInputPanel";
    WidgetEventTypes["ContentsRectChange"] = "ContentsRectChange";
    WidgetEventTypes["ContextMenu"] = "ContextMenu";
    WidgetEventTypes["CursorChange"] = "CursorChange";
    WidgetEventTypes["DeferredDelete"] = "DeferredDelete";
    WidgetEventTypes["DragEnter"] = "DragEnter";
    WidgetEventTypes["DragLeave"] = "DragLeave";
    WidgetEventTypes["DragMove"] = "DragMove";
    WidgetEventTypes["Drop"] = "Drop";
    WidgetEventTypes["DynamicPropertyChange"] = "DynamicPropertyChange";
    WidgetEventTypes["EnabledChange"] = "EnabledChange";
    WidgetEventTypes["Enter"] = "Enter";
    WidgetEventTypes["EnterWhatsThisMode"] = "EnterWhatsThisMode";
    WidgetEventTypes["Expose"] = "Expose";
    WidgetEventTypes["FileOpen"] = "FileOpen";
    WidgetEventTypes["FocusIn"] = "FocusIn";
    WidgetEventTypes["FocusOut"] = "FocusOut";
    WidgetEventTypes["FocusAboutToChange"] = "FocusAboutToChange";
    WidgetEventTypes["FontChange"] = "FontChange";
    WidgetEventTypes["Gesture"] = "Gesture";
    WidgetEventTypes["GestureOverride"] = "GestureOverride";
    WidgetEventTypes["GrabKeyboard"] = "GrabKeyboard";
    WidgetEventTypes["GrabMouse"] = "GrabMouse";
    WidgetEventTypes["GraphicsSceneContextMenu"] = "GraphicsSceneContextMenu";
    WidgetEventTypes["GraphicsSceneDragEnter"] = "GraphicsSceneDragEnter";
    WidgetEventTypes["GraphicsSceneDragLeave"] = "GraphicsSceneDragLeave";
    WidgetEventTypes["GraphicsSceneDragMove"] = "GraphicsSceneDragMove";
    WidgetEventTypes["GraphicsSceneDrop"] = "GraphicsSceneDrop";
    WidgetEventTypes["GraphicsSceneHelp"] = "GraphicsSceneHelp";
    WidgetEventTypes["GraphicsSceneHoverEnter"] = "GraphicsSceneHoverEnter";
    WidgetEventTypes["GraphicsSceneHoverLeave"] = "GraphicsSceneHoverLeave";
    WidgetEventTypes["GraphicsSceneHoverMove"] = "GraphicsSceneHoverMove";
    WidgetEventTypes["GraphicsSceneMouseDoubleClick"] = "GraphicsSceneMouseDoubleClick";
    WidgetEventTypes["GraphicsSceneMouseMove"] = "GraphicsSceneMouseMove";
    WidgetEventTypes["GraphicsSceneMousePress"] = "GraphicsSceneMousePress";
    WidgetEventTypes["GraphicsSceneMouseRelease"] = "GraphicsSceneMouseRelease";
    WidgetEventTypes["GraphicsSceneMove"] = "GraphicsSceneMove";
    WidgetEventTypes["GraphicsSceneResize"] = "GraphicsSceneResize";
    WidgetEventTypes["GraphicsSceneWheel"] = "GraphicsSceneWheel";
    WidgetEventTypes["Hide"] = "Hide";
    WidgetEventTypes["HideToParent"] = "HideToParent";
    WidgetEventTypes["HoverEnter"] = "HoverEnter";
    WidgetEventTypes["HoverLeave"] = "HoverLeave";
    WidgetEventTypes["HoverMove"] = "HoverMove";
    WidgetEventTypes["IconDrag"] = "IconDrag";
    WidgetEventTypes["IconTextChange"] = "IconTextChange";
    WidgetEventTypes["InputMethod"] = "InputMethod";
    WidgetEventTypes["InputMethodQuery"] = "InputMethodQuery";
    WidgetEventTypes["KeyboardLayoutChange"] = "KeyboardLayoutChange";
    WidgetEventTypes["KeyPress"] = "KeyPress";
    WidgetEventTypes["KeyRelease"] = "KeyRelease";
    WidgetEventTypes["LanguageChange"] = "LanguageChange";
    WidgetEventTypes["LayoutDirectionChange"] = "LayoutDirectionChange";
    WidgetEventTypes["LayoutRequest"] = "LayoutRequest";
    WidgetEventTypes["Leave"] = "Leave";
    WidgetEventTypes["LeaveWhatsThisMode"] = "LeaveWhatsThisMode";
    WidgetEventTypes["LocaleChange"] = "LocaleChange";
    WidgetEventTypes["NonClientAreaMouseButtonDblClick"] = "NonClientAreaMouseButtonDblClick";
    WidgetEventTypes["NonClientAreaMouseButtonPress"] = "NonClientAreaMouseButtonPress";
    WidgetEventTypes["NonClientAreaMouseButtonRelease"] = "NonClientAreaMouseButtonRelease";
    WidgetEventTypes["NonClientAreaMouseMove"] = "NonClientAreaMouseMove";
    WidgetEventTypes["MacSizeChange"] = "MacSizeChange";
    WidgetEventTypes["MetaCall"] = "MetaCall";
    WidgetEventTypes["ModifiedChange"] = "ModifiedChange";
    WidgetEventTypes["MouseButtonDblClick"] = "MouseButtonDblClick";
    WidgetEventTypes["MouseButtonPress"] = "MouseButtonPress";
    WidgetEventTypes["MouseButtonRelease"] = "MouseButtonRelease";
    WidgetEventTypes["MouseMove"] = "MouseMove";
    WidgetEventTypes["MouseTrackingChange"] = "MouseTrackingChange";
    WidgetEventTypes["Move"] = "Move";
    WidgetEventTypes["NativeGesture"] = "NativeGesture";
    WidgetEventTypes["OrientationChange"] = "OrientationChange";
    WidgetEventTypes["Paint"] = "Paint";
    WidgetEventTypes["PaletteChange"] = "PaletteChange";
    WidgetEventTypes["ParentAboutToChange"] = "ParentAboutToChange";
    WidgetEventTypes["ParentChange"] = "ParentChange";
    WidgetEventTypes["PlatformPanel"] = "PlatformPanel";
    WidgetEventTypes["PlatformSurface"] = "PlatformSurface";
    WidgetEventTypes["Polish"] = "Polish";
    WidgetEventTypes["PolishRequest"] = "PolishRequest";
    WidgetEventTypes["QueryWhatsThis"] = "QueryWhatsThis";
    WidgetEventTypes["ReadOnlyChange"] = "ReadOnlyChange";
    WidgetEventTypes["RequestSoftwareInputPanel"] = "RequestSoftwareInputPanel";
    WidgetEventTypes["Resize"] = "Resize";
    WidgetEventTypes["ScrollPrepare"] = "ScrollPrepare";
    WidgetEventTypes["Scroll"] = "Scroll";
    WidgetEventTypes["Shortcut"] = "Shortcut";
    WidgetEventTypes["ShortcutOverride"] = "ShortcutOverride";
    WidgetEventTypes["Show"] = "Show";
    WidgetEventTypes["ShowToParent"] = "ShowToParent";
    WidgetEventTypes["SockAct"] = "SockAct";
    WidgetEventTypes["StateMachineSignal"] = "StateMachineSignal";
    WidgetEventTypes["StateMachineWrapped"] = "StateMachineWrapped";
    WidgetEventTypes["StatusTip"] = "StatusTip";
    WidgetEventTypes["StyleChange"] = "StyleChange";
    WidgetEventTypes["TabletMove"] = "TabletMove";
    WidgetEventTypes["TabletPress"] = "TabletPress";
    WidgetEventTypes["TabletRelease"] = "TabletRelease";
    WidgetEventTypes["TabletEnterProximity"] = "TabletEnterProximity";
    WidgetEventTypes["TabletLeaveProximity"] = "TabletLeaveProximity";
    WidgetEventTypes["TabletTrackingChange"] = "TabletTrackingChange";
    WidgetEventTypes["ThreadChange"] = "ThreadChange";
    WidgetEventTypes["Timer"] = "Timer";
    WidgetEventTypes["ToolBarChange"] = "ToolBarChange";
    WidgetEventTypes["ToolTip"] = "ToolTip";
    WidgetEventTypes["ToolTipChange"] = "ToolTipChange";
    WidgetEventTypes["TouchBegin"] = "TouchBegin";
    WidgetEventTypes["TouchCancel"] = "TouchCancel";
    WidgetEventTypes["TouchEnd"] = "TouchEnd";
    WidgetEventTypes["TouchUpdate"] = "TouchUpdate";
    WidgetEventTypes["UngrabKeyboard"] = "UngrabKeyboard";
    WidgetEventTypes["UngrabMouse"] = "UngrabMouse";
    WidgetEventTypes["UpdateLater"] = "UpdateLater";
    WidgetEventTypes["UpdateRequest"] = "UpdateRequest";
    WidgetEventTypes["WhatsThis"] = "WhatsThis";
    WidgetEventTypes["WhatsThisClicked"] = "WhatsThisClicked";
    WidgetEventTypes["Wheel"] = "Wheel";
    WidgetEventTypes["WinEventAct"] = "WinEventAct";
    WidgetEventTypes["WindowActivate"] = "WindowActivate";
    WidgetEventTypes["WindowBlocked"] = "WindowBlocked";
    WidgetEventTypes["WindowDeactivate"] = "WindowDeactivate";
    WidgetEventTypes["WindowIconChange"] = "WindowIconChange";
    WidgetEventTypes["WindowStateChange"] = "WindowStateChange";
    WidgetEventTypes["WindowTitleChange"] = "WindowTitleChange";
    WidgetEventTypes["WindowUnblocked"] = "WindowUnblocked";
    WidgetEventTypes["WinIdChange"] = "WinIdChange";
    WidgetEventTypes["ZOrderChange"] = "ZOrderChange";
})(WidgetEventTypes = exports.WidgetEventTypes || (exports.WidgetEventTypes = {}));
