"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceDataRelationshipsCreatedByUserData = void 0;
class MaintenanceDataRelationshipsCreatedByUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MaintenanceDataRelationshipsCreatedByUserData.attributeTypeMap;
    }
}
exports.MaintenanceDataRelationshipsCreatedByUserData = MaintenanceDataRelationshipsCreatedByUserData;
/**
 * @ignore
 */
MaintenanceDataRelationshipsCreatedByUserData.attributeTypeMap = {
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
//# sourceMappingURL=MaintenanceDataRelationshipsCreatedByUserData.js.map