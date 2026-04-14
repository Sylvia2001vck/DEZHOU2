"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedTestsResponse = void 0;
class DeletedTestsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeletedTestsResponse.attributeTypeMap;
    }
}
exports.DeletedTestsResponse = DeletedTestsResponse;
/**
 * @ignore
 */
DeletedTestsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DeletedTestResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeletedTestsResponse.js.map