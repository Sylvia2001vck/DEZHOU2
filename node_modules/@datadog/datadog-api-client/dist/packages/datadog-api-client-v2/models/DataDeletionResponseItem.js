"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDeletionResponseItem = void 0;
/**
 * The created data deletion request information.
 */
class DataDeletionResponseItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DataDeletionResponseItem.attributeTypeMap;
    }
}
exports.DataDeletionResponseItem = DataDeletionResponseItem;
/**
 * @ignore
 */
DataDeletionResponseItem.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DataDeletionResponseItemAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DataDeletionResponseItem.js.map