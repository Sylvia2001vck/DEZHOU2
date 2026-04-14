"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedTestsRequestDelete = void 0;
class DeletedTestsRequestDelete {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeletedTestsRequestDelete.attributeTypeMap;
    }
}
exports.DeletedTestsRequestDelete = DeletedTestsRequestDelete;
/**
 * @ignore
 */
DeletedTestsRequestDelete.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DeletedTestsRequestDeleteAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DeletedTestsRequestType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeletedTestsRequestDelete.js.map