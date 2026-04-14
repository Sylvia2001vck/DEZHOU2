"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackInnerWidgets = void 0;
/**
 * Powerpack group widget definition of individual widgets.
 */
class PowerpackInnerWidgets {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackInnerWidgets.attributeTypeMap;
    }
}
exports.PowerpackInnerWidgets = PowerpackInnerWidgets;
/**
 * @ignore
 */
PowerpackInnerWidgets.attributeTypeMap = {
    definition: {
        baseName: "definition",
        type: "{ [key: string]: any; }",
        required: true,
    },
    layout: {
        baseName: "layout",
        type: "PowerpackInnerWidgetLayout",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackInnerWidgets.js.map