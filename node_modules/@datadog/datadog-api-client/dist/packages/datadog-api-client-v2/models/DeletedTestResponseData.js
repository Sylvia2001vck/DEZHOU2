"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedTestResponseData = void 0;
class DeletedTestResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeletedTestResponseData.attributeTypeMap;
    }
}
exports.DeletedTestResponseData = DeletedTestResponseData;
/**
 * @ignore
 */
DeletedTestResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DeletedTestResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DeletedTestsResponseType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeletedTestResponseData.js.map