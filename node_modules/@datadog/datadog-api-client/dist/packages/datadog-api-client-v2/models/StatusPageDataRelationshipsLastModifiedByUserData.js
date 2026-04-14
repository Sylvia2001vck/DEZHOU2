"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageDataRelationshipsLastModifiedByUserData = void 0;
class StatusPageDataRelationshipsLastModifiedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageDataRelationshipsLastModifiedByUserData.attributeTypeMap;
    }
}
exports.StatusPageDataRelationshipsLastModifiedByUserData = StatusPageDataRelationshipsLastModifiedByUserData;
/**
 * @ignore
 */
StatusPageDataRelationshipsLastModifiedByUserData.attributeTypeMap = {
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
//# sourceMappingURL=StatusPageDataRelationshipsLastModifiedByUserData.js.map