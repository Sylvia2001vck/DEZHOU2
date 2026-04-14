"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageAsIncludedRelationshipsCreatedByUserData = void 0;
class StatusPageAsIncludedRelationshipsCreatedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageAsIncludedRelationshipsCreatedByUserData.attributeTypeMap;
    }
}
exports.StatusPageAsIncludedRelationshipsCreatedByUserData = StatusPageAsIncludedRelationshipsCreatedByUserData;
/**
 * @ignore
 */
StatusPageAsIncludedRelationshipsCreatedByUserData.attributeTypeMap = {
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
//# sourceMappingURL=StatusPageAsIncludedRelationshipsCreatedByUserData.js.map