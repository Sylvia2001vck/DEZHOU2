"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageAsIncludedRelationshipsLastModifiedByUserData = void 0;
class StatusPageAsIncludedRelationshipsLastModifiedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageAsIncludedRelationshipsLastModifiedByUserData.attributeTypeMap;
    }
}
exports.StatusPageAsIncludedRelationshipsLastModifiedByUserData = StatusPageAsIncludedRelationshipsLastModifiedByUserData;
/**
 * @ignore
 */
StatusPageAsIncludedRelationshipsLastModifiedByUserData.attributeTypeMap = {
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
//# sourceMappingURL=StatusPageAsIncludedRelationshipsLastModifiedByUserData.js.map