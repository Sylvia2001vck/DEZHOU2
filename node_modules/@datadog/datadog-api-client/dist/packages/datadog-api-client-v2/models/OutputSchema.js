"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputSchema = void 0;
/**
 * A list of output parameters for the workflow.
 */
class OutputSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutputSchema.attributeTypeMap;
    }
}
exports.OutputSchema = OutputSchema;
/**
 * @ignore
 */
OutputSchema.attributeTypeMap = {
    parameters: {
        baseName: "parameters",
        type: "Array<OutputSchemaParameters>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutputSchema.js.map