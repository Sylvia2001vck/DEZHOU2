"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentGroupRelationshipsLastModifiedByUserData = void 0;
class StatusPagesComponentGroupRelationshipsLastModifiedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentGroupRelationshipsLastModifiedByUserData.attributeTypeMap;
    }
}
exports.StatusPagesComponentGroupRelationshipsLastModifiedByUserData = StatusPagesComponentGroupRelationshipsLastModifiedByUserData;
/**
 * @ignore
 */
StatusPagesComponentGroupRelationshipsLastModifiedByUserData.attributeTypeMap = {
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
//# sourceMappingURL=StatusPagesComponentGroupRelationshipsLastModifiedByUserData.js.map