"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentDataRelationshipsStatusPageData = void 0;
class StatusPagesComponentDataRelationshipsStatusPageData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentDataRelationshipsStatusPageData.attributeTypeMap;
    }
}
exports.StatusPagesComponentDataRelationshipsStatusPageData = StatusPagesComponentDataRelationshipsStatusPageData;
/**
 * @ignore
 */
StatusPagesComponentDataRelationshipsStatusPageData.attributeTypeMap = {
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
//# sourceMappingURL=StatusPagesComponentDataRelationshipsStatusPageData.js.map