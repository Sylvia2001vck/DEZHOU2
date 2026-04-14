"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchMaintenanceRequestDataAttributes = void 0;
/**
 * The supported attributes for updating a maintenance.
 */
class PatchMaintenanceRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchMaintenanceRequestDataAttributes.attributeTypeMap;
    }
}
exports.PatchMaintenanceRequestDataAttributes = PatchMaintenanceRequestDataAttributes;
/**
 * @ignore
 */
PatchMaintenanceRequestDataAttributes.attributeTypeMap = {
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
        type: "Array<PatchMaintenanceRequestDataAttributesComponentsAffectedItems>",
    },
    inProgressDescription: {
        baseName: "in_progress_description",
        type: "string",
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchMaintenanceRequestDataAttributes.js.map