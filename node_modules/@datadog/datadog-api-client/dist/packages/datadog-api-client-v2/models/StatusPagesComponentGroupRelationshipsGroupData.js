"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentGroupRelationshipsGroupData = void 0;
class StatusPagesComponentGroupRelationshipsGroupData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentGroupRelationshipsGroupData.attributeTypeMap;
    }
}
exports.StatusPagesComponentGroupRelationshipsGroupData = StatusPagesComponentGroupRelationshipsGroupData;
/**
 * @ignore
 */
StatusPagesComponentGroupRelationshipsGroupData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "StatusPagesComponentGroupType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesComponentGroupRelationshipsGroupData.js.map