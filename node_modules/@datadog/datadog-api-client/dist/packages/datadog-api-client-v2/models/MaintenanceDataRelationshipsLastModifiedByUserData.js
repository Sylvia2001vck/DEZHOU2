"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceDataRelationshipsLastModifiedByUserData = void 0;
class MaintenanceDataRelationshipsLastModifiedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MaintenanceDataRelationshipsLastModifiedByUserData.attributeTypeMap;
    }
}
exports.MaintenanceDataRelationshipsLastModifiedByUserData = MaintenanceDataRelationshipsLastModifiedByUserData;
/**
 * @ignore
 */
MaintenanceDataRelationshipsLastModifiedByUserData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
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
//# sourceMappingURL=MaintenanceDataRelationshipsLastModifiedByUserData.js.map