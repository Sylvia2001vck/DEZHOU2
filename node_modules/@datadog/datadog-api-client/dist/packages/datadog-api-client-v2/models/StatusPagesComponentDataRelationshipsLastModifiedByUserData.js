"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesComponentDataRelationshipsLastModifiedByUserData = void 0;
class StatusPagesComponentDataRelationshipsLastModifiedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesComponentDataRelationshipsLastModifiedByUserData.attributeTypeMap;
    }
}
exports.StatusPagesComponentDataRelationshipsLastModifiedByUserData = StatusPagesComponentDataRelationshipsLastModifiedByUserData;
/**
 * @ignore
 */
StatusPagesComponentDataRelationshipsLastModifiedByUserData.attributeTypeMap = {
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
//# sourceMappingURL=StatusPagesComponentDataRelationshipsLastModifiedByUserData.js.map