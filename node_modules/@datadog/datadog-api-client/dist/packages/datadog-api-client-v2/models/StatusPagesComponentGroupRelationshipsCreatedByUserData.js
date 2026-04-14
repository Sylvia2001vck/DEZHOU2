"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentGroupRelationshipsCreatedByUserData = void 0;
class StatusPagesComponentGroupRelationshipsCreatedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentGroupRelationshipsCreatedByUserData.attributeTypeMap;
    }
}
exports.StatusPagesComponentGroupRelationshipsCreatedByUserData = StatusPagesComponentGroupRelationshipsCreatedByUserData;
/**
 * @ignore
 */
StatusPagesComponentGroupRelationshipsCreatedByUserData.attributeTypeMap = {
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
//# sourceMappingURL=StatusPagesComponentGroupRelationshipsCreatedByUserData.js.map