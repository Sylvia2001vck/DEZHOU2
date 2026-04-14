"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalVariableJsonPatchRequestDataAttributes = void 0;
class GlobalVariableJsonPatchRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalVariableJsonPatchRequestDataAttributes.attributeTypeMap;
    }
}
exports.GlobalVariableJsonPatchRequestDataAttributes = GlobalVariableJsonPatchRequestDataAttributes;
/**
 * @ignore
 */
GlobalVariableJsonPatchRequestDataAttributes.attributeTypeMap = {
    jsonPatch: {
        baseName: "json_patch",
        type: "Array<JsonPatchOperation>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GlobalVariableJsonPatchRequestDataAttributes.js.map