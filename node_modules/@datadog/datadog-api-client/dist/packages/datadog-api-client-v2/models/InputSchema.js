"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSchema = void 0;
/**
 * A list of input parameters for the workflow. These can be used as dynamic runtime values in your workflow.
 */
class InputSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return InputSchema.attributeTypeMap;
    }
}
exports.InputSchema = InputSchema;
/**
 * @ignore
 */
InputSchema.attributeTypeMap = {
    parameters: {
        baseName: "parameters",
        type: "Array<InputSchemaParameters>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=InputSchema.js.map