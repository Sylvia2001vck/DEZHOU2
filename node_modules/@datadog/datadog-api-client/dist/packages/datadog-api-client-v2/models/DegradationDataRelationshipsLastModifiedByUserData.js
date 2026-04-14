"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationDataRelationshipsLastModifiedByUserData = void 0;
class DegradationDataRelationshipsLastModifiedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationDataRelationshipsLastModifiedByUserData.attributeTypeMap;
    }
}
exports.DegradationDataRelationshipsLastModifiedByUserData = DegradationDataRelationshipsLastModifiedByUserData;
/**
 * @ignore
 */
DegradationDataRelationshipsLastModifiedByUserData.attributeTypeMap = {
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
//# sourceMappingURL=DegradationDataRelationshipsLastModifiedByUserData.js.map