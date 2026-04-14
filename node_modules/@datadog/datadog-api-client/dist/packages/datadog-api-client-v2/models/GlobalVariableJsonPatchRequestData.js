"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVariableJsonPatchRequestData = void 0;
class GlobalVariableJsonPatchRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalVariableJsonPatchRequestData.attributeTypeMap;
    }
}
exports.GlobalVariableJsonPatchRequestData = GlobalVariableJsonPatchRequestData;
/**
 * @ignore
 */
GlobalVariableJsonPatchRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GlobalVariableJsonPatchRequestDataAttributes",
    },
    type: {
        baseName: "type",
        type: "GlobalVariableJsonPatchType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GlobalVariableJsonPatchRequestData.js.map