"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceDataAttributesUpdatesItems = void 0;
class MaintenanceDataAttributesUpdatesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MaintenanceDataAttributesUpdatesItems.attributeTypeMap;
    }
}
exports.MaintenanceDataAttributesUpdatesItems = MaintenanceDataAttributesUpdatesItems;
/**
 * @ignore
 */
MaintenanceDataAttributesUpdatesItems.attributeTypeMap = {
    componentsAffected: {
        baseName: "components_affected",
        type: "Array<MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems>",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    manualTransition: {
        baseName: "manual_transition",
        type: "boolean",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    startedAt: {
        baseName: "started_at",
        type: "Date",
        format: "date-time",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MaintenanceDataAttributesUpdatesItems.js.map