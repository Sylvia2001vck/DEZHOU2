"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputSchemaParameters = void 0;
/**
 * The definition of `OutputSchemaParameters` object.
 */
class OutputSchemaParameters {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutputSchemaParameters.attributeTypeMap;
    }
}
exports.OutputSchemaParameters = OutputSchemaParameters;
/**
 * @ignore
 */
OutputSchemaParameters.attributeTypeMap = {
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
        type: "OutputSchemaParametersType",
        required: true,
    },
    value: {
        baseName: "value",
        type: "any",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutputSchemaParameters.js.map