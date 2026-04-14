"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentGroupRelationshipsStatusPageData = void 0;
class StatusPagesComponentGroupRelationshipsStatusPageData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentGroupRelationshipsStatusPageData.attributeTypeMap;
    }
}
exports.StatusPagesComponentGroupRelationshipsStatusPageData = StatusPagesComponentGroupRelationshipsStatusPageData;
/**
 * @ignore
 */
StatusPagesComponentGroupRelationshipsStatusPageData.attributeTypeMap = {
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
//# sourceMappingURL=StatusPagesComponentGroupRelationshipsStatusPageData.js.map