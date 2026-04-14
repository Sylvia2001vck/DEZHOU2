"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaintenanceRequestDataAttributes = void 0;
/**
 * The supported attributes for creating a maintenance.
 */
class CreateMaintenanceRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateMaintenanceRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateMaintenanceRequestDataAttributes = CreateMaintenanceRequestDataAttributes;
/**
 * @ignore
 */
CreateMaintenanceRequestDataAttributes.attributeTypeMap = {
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
        type: "Array<CreateMaintenanceRequestDataAttributesComponentsAffectedItems>",
        required: true,
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
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateMaintenanceRequestDataAttributes.js.map