"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationDataRelationshipsStatusPageData = void 0;
class DegradationDataRelationshipsStatusPageData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationDataRelationshipsStatusPageData.attributeTypeMap;
    }
}
exports.DegradationDataRelationshipsStatusPageData = DegradationDataRelationshipsStatusPageData;
/**
 * @ignore
 */
DegradationDataRelationshipsStatusPageData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
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
//# sourceMappingURL=DegradationDataRelationshipsStatusPageData.js.map