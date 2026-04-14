"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceDataAttributes = void 0;
/**
 * The attributes of a maintenance.
 */
class MaintenanceDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MaintenanceDataAttributes.attributeTypeMap;
    }
}
exports.MaintenanceDataAttributes = MaintenanceDataAttributes;
/**
 * @ignore
 */
MaintenanceDataAttributes.attributeTypeMap = {
    completedDate: {
        baseName: "completed_date",
        type: "Date",
        format: "date-time",
    },
    completedDescription: {
        baseName: "completed_description",
        type: "string",
    },
    componentsAffected: {
        baseName: "components_affected",
        type: "Array<MaintenanceDataAttributesComponentsAffectedItems>",
    },
    inProgressDescription: {
        baseName: "in_progress_description",
        type: "string",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    publishedDate: {
        baseName: "published_date",
        type: "Date",
        format: "date-time",
    },
    scheduledDescription: {
        baseName: "scheduled_description",
        type: "string",
    },
    startDate: {
        baseName: "start_date",
        type: "Date",
        format: "date-time",
    },
    status: {
        baseName: "status",
        type: "MaintenanceDataAttributesStatus",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    updates: {
        baseName: "updates",
        type: "Array<MaintenanceDataAttributesUpdatesItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MaintenanceDataAttributes.js.map