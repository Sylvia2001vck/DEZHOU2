"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentDataRelationshipsCreatedByUserData = void 0;
class StatusPagesComponentDataRelationshipsCreatedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentDataRelationshipsCreatedByUserData.attributeTypeMap;
    }
}
exports.StatusPagesComponentDataRelationshipsCreatedByUserData = StatusPagesComponentDataRelationshipsCreatedByUserData;
/**
 * @ignore
 */
StatusPagesComponentDataRelationshipsCreatedByUserData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "StatusPagesUserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesComponentDataRelationshipsCreatedByUserData.js.map