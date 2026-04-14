"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonPatchOperation = void 0;
/**
 * A JSON Patch operation as per RFC 6902.
 */
class JsonPatchOperation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JsonPatchOperation.attributeTypeMap;
    }
}
exports.JsonPatchOperation = JsonPatchOperation;
/**
 * @ignore
 */
JsonPatchOperation.attributeTypeMap = {
    op: {
        baseName: "op",
        type: "JsonPatchOperationOp",
        required: true,
    },
    path: {
        baseName: "path",
        type: "string",
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
//# sourceMappingURL=JsonPatchOperation.js.map