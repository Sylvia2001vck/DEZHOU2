"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationDataRelationshipsCreatedByUserData = void 0;
class DegradationDataRelationshipsCreatedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationDataRelationshipsCreatedByUserData.attributeTypeMap;
    }
}
exports.DegradationDataRelationshipsCreatedByUserData = DegradationDataRelationshipsCreatedByUserData;
/**
 * @ignore
 */
DegradationDataRelationshipsCreatedByUserData.attributeTypeMap = {
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
//# sourceMappingURL=DegradationDataRelationshipsCreatedByUserData.js.map