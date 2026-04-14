"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentDataRelationshipsGroupData = void 0;
class StatusPagesComponentDataRelationshipsGroupData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentDataRelationshipsGroupData.attributeTypeMap;
    }
}
exports.StatusPagesComponentDataRelationshipsGroupData = StatusPagesComponentDataRelationshipsGroupData;
/**
 * @ignore
 */
StatusPagesComponentDataRelationshipsGroupData.attributeTypeMap = {
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
//# sourceMappingURL=StatusPagesComponentDataRelationshipsGroupData.js.map