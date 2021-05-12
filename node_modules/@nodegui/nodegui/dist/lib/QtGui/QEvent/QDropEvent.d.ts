import { NativeElement, NativeRawPointer } from '../../core/Component';
import { DropAction } from '../../QtEnums';
import { QMimeData } from '../../QtCore/QMimeData';
export declare class QDropEvent {
    native: NativeElement;
    constructor(event: NativeRawPointer<'QEvent'>);
    /** Sets the drop action to be the proposed action */
    acceptProposedAction(): void;
    /**
     * Returns the action to be performed on the data by the target.
     * This may be different from the action supplied in proposedAction()
     * if you have called setDropAction() to explicitly choose a drop action
     */
    dropAction(): DropAction;
    /**
     * Returns the modifier keys that are pressed
     *
     * see Qt::KeyboardModifier for flags
     */
    keyboardModifiers(): number;
    /**
     * Returns the data that was dropped on the widget and its associated MIME type information
     */
    mimeData(): QMimeData;
    /**
     * Returns the mouse buttons that are pressed
     *
     * See Qt::MouseButton for flags
     */
    mouseButtons(): number;
    /**
     * Returns the position where the drop was made
     */
    pos(): {
        x: number;
        y: number;
    };
    /**
     * Returns the position where the drop was made
     */
    posF(): {
        x: number;
        y: number;
    };
    /**
     * Returns an OR-combination of possible drop actions.
     *
     * See Qt::DropAction for flags
     */
    possibleActions(): number;
    /**
     * Returns the proposed drop action
     *
     */
    proposedAction(): DropAction;
    setDropAction(action: DropAction): void;
    /**
     * Sets the accept flag of the event object, the equivalent of calling setAccepted(true).
     * Setting the accept parameter indicates that the event receiver wants the event. Unwanted events might be propagated to the parent widget
     */
    accept(): void;
    /**
     * Clears the accept flag parameter of the event object, the equivalent of calling setAccepted(false).
     * Clearing the accept parameter indicates that the event receiver does not want the event.
     * Unwanted events might be propagated to the parent widget.
     */
    ignore(): void;
    isAccepted(): boolean;
    /**
     * Sets the accept flag of the event object
     */
    setAccepted(accepted: boolean): void;
    /**
     * Returns true if the event originated outside the application (a system event); otherwise returns false.
     *
     * The return value of this function is not defined for paint events.
     */
    spontaneous(): boolean;
    /**
     * Returns the event type
     * @returns {Number} This is QEvent::Type
     */
    type(): number;
}
