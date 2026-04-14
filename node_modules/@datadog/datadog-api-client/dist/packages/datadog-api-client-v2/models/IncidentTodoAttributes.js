"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTodoAttributes = void 0;
/**
 * Incident todo's attributes.
 */
class IncidentTodoAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTodoAttributes.attributeTypeMap;
    }
}
exports.IncidentTodoAttributes = IncidentTodoAttributes;
/**
 * @ignore
 */
IncidentTodoAttributes.attributeTypeMap = {
    assignees: {
        baseName: "assignees",
        type: "Array<IncidentTodoAssignee>",
        required: true,
    },
    completed: {
        baseName: "completed",
        type: "string",
    },
    content: {
        baseName: "content",
        type: "string",
        required: true,
    },
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    dueDate: {
        baseName: "due_date",
        type: "string",
    },
    incidentId: {
        baseName: "incident_id",
        type: "string",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTodoAttributes.js.map