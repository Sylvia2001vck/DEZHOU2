"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceDataRelationships = void 0;
/**
 * The relationships of a maintenance.
 */
class MaintenanceDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MaintenanceDataRelationships.attributeTypeMap;
    }
}
exports.MaintenanceDataRelationships = MaintenanceDataRelationships;
/**
 * @ignore
 */
MaintenanceDataRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "MaintenanceDataRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "MaintenanceDataRelationshipsLastModifiedByUser",
    },
    statusPage: {
        baseName: "status_page",
        type: "MaintenanceDataRelationshipsStatusPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MaintenanceDataRelationships.js.map