"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackGroupWidgetDefinition = void 0;
/**
 * Powerpack group widget object.
 */
class PowerpackGroupWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackGroupWidgetDefinition.attributeTypeMap;
    }
}
exports.PowerpackGroupWidgetDefinition = PowerpackGroupWidgetDefinition;
/**
 * @ignore
 */
PowerpackGroupWidgetDefinition.attributeTypeMap = {
    layoutType: {
        baseName: "layout_type",
        type: "string",
        required: true,
    },
    showTitle: {
        baseName: "show_title",
        type: "boolean",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    widgets: {
        baseName: "widgets",
        type: "Array<PowerpackInnerWidgets>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackGroupWidgetDefinition.js.map