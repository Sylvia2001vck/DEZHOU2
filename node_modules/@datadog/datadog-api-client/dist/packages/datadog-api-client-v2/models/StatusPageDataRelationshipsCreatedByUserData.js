"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageDataRelationshipsCreatedByUserData = void 0;
class StatusPageDataRelationshipsCreatedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageDataRelationshipsCreatedByUserData.attributeTypeMap;
    }
}
exports.StatusPageDataRelationshipsCreatedByUserData = StatusPageDataRelationshipsCreatedByUserData;
/**
 * @ignore
 */
StatusPageDataRelationshipsCreatedByUserData.attributeTypeMap = {
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
//# sourceMappingURL=StatusPageDataRelationshipsCreatedByUserData.js.map