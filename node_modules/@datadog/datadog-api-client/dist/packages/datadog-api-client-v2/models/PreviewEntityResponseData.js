"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewEntityResponseData = void 0;
class PreviewEntityResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PreviewEntityResponseData.attributeTypeMap;
    }
}
exports.PreviewEntityResponseData = PreviewEntityResponseData;
/**
 * @ignore
 */
PreviewEntityResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EntityResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "EntityResponseDataRelationships",
    },
    type: {
        baseName: "type",
        type: "EntityResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PreviewEntityResponseData.js.map