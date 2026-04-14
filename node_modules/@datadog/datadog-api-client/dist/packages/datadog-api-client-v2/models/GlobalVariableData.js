"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVariableData = void 0;
/**
 * Synthetics global variable data. Wrapper around the global variable object.
 */
class GlobalVariableData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalVariableData.attributeTypeMap;
    }
}
exports.GlobalVariableData = GlobalVariableData;
/**
 * @ignore
 */
GlobalVariableData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SyntheticsGlobalVariable",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GlobalVariableType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GlobalVariableData.js.map