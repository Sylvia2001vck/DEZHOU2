"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackAttributes = void 0;
/**
 * Powerpack attribute object.
 */
class PowerpackAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackAttributes.attributeTypeMap;
    }
}
exports.PowerpackAttributes = PowerpackAttributes;
/**
 * @ignore
 */
PowerpackAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    groupWidget: {
        baseName: "group_widget",
        type: "PowerpackGroupWidget",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    templateVariables: {
        baseName: "template_variables",
        type: "Array<PowerpackTemplateVariable>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackAttributes.js.map