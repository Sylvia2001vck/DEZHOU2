"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomFrameworkResponse = void 0;
/**
 * Response object to delete a custom framework.
 */
class DeleteCustomFrameworkResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteCustomFrameworkResponse.attributeTypeMap;
    }
}
exports.DeleteCustomFrameworkResponse = DeleteCustomFrameworkResponse;
/**
 * @ignore
 */
DeleteCustomFrameworkResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomFrameworkMetadata",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeleteCustomFrameworkResponse.js.map