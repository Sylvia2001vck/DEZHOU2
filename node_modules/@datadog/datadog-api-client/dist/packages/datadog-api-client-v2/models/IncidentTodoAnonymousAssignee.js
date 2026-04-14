"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTodoAnonymousAssignee = void 0;
/**
 * Anonymous assignee entity.
 */
class IncidentTodoAnonymousAssignee {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTodoAnonymousAssignee.attributeTypeMap;
    }
}
exports.IncidentTodoAnonymousAssignee = IncidentTodoAnonymousAssignee;
/**
 * @ignore
 */
IncidentTodoAnonymousAssignee.attributeTypeMap = {
    icon: {
        baseName: "icon",
        type: "string",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    source: {
        baseName: "source",
        type: "IncidentTodoAnonymousAssigneeSource",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTodoAnonymousAssignee.js.map