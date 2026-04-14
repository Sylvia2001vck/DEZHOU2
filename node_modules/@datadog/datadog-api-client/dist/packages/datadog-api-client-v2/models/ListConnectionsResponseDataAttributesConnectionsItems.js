"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListConnectionsResponseDataAttributesConnectionsItems = void 0;
class ListConnectionsResponseDataAttributesConnectionsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListConnectionsResponseDataAttributesConnectionsItems.attributeTypeMap;
    }
}
exports.ListConnectionsResponseDataAttributesConnectionsItems = ListConnectionsResponseDataAttributesConnectionsItems;
/**
 * @ignore
 */
ListConnectionsResponseDataAttributesConnectionsItems.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
    },
    fields: {
        baseName: "fields",
        type: "Array<CreateConnectionRequestDataAttributesFieldsItems>",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    join: {
        baseName: "join",
        type: "ListConnectionsResponseDataAttributesConnectionsItemsJoin",
    },
    metadata: {
        baseName: "metadata",
        type: "{ [key: string]: string; }",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    updatedAt: {
        baseName: "updated_at",
        type: "Date",
        format: "date-time",
    },
    updatedBy: {
        baseName: "updated_by",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListConnectionsResponseDataAttributesConnectionsItems.js.map