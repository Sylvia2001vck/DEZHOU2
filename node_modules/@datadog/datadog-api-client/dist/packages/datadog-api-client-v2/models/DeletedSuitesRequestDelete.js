"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedSuitesRequestDelete = void 0;
class DeletedSuitesRequestDelete {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeletedSuitesRequestDelete.attributeTypeMap;
    }
}
exports.DeletedSuitesRequestDelete = DeletedSuitesRequestDelete;
/**
 * @ignore
 */
DeletedSuitesRequestDelete.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DeletedSuitesRequestDeleteAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DeletedSuitesRequestType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeletedSuitesRequestDelete.js.map