import { NodeWidget, QWidgetSignals } from '../../QtWidgets/QWidget';
export declare class StyleSheet {
    static create(cssString: string): string;
}
export declare function prepareInlineStyleSheet<Signals extends QWidgetSignals>(widget: NodeWidget<Signals>, rawStyle: string): string;
