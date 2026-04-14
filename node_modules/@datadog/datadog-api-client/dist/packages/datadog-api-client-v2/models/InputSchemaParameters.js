"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSchemaParameters = void 0;
/**
 * The definition of `InputSchemaParameters` object.
 */
class InputSchemaParameters {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return InputSchemaParameters.attributeTypeMap;
    }
}
exports.InputSchemaParameters = InputSchemaParameters;
/**
 * @ignore
 */
InputSchemaParameters.attributeTypeMap = {
    allowExtraValues: {
        baseName: "allowExtraValues",
        type: "boolean",
    },
    allowedValues: {
        baseName: "allowedValues",
        type: "any",
    },
    defaultValue: {
        baseName: "defaultValue",
        type: "any",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    label: {
        baseName: "label",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "InputSchemaParametersType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=InputSchemaParameters.js.map