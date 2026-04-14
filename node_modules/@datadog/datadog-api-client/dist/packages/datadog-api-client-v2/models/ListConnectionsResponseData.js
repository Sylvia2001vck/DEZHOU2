"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListConnectionsResponseData = void 0;
class ListConnectionsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListConnectionsResponseData.attributeTypeMap;
    }
}
exports.ListConnectionsResponseData = ListConnectionsResponseData;
/**
 * @ignore
 */
ListConnectionsResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ListConnectionsResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ListConnectionsResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListConnectionsResponseData.js.map