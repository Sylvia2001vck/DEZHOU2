"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageData = void 0;
class StatusPageData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageData.attributeTypeMap;
    }
}
exports.StatusPageData = StatusPageData;
/**
 * @ignore
 */
StatusPageData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "StatusPageDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    relationships: {
        baseName: "relationships",
        type: "StatusPageDataRelationships",
    },
    type: {
        baseName: "type",
        type: "StatusPageDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPageData.js.map