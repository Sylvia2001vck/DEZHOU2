"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackGroupWidget = void 0;
/**
 * Powerpack group widget definition object.
 */
class PowerpackGroupWidget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackGroupWidget.attributeTypeMap;
    }
}
exports.PowerpackGroupWidget = PowerpackGroupWidget;
/**
 * @ignore
 */
PowerpackGroupWidget.attributeTypeMap = {
    definition: {
        baseName: "definition",
        type: "PowerpackGroupWidgetDefinition",
        required: true,
    },
    layout: {
        baseName: "layout",
        type: "PowerpackGroupWidgetLayout",
    },
    liveSpan: {
        baseName: "live_span",
        type: "WidgetLiveSpan",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackGroupWidget.js.map