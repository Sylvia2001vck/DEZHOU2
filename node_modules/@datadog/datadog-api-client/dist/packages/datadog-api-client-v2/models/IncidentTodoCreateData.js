"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTodoCreateData = void 0;
/**
 * Incident todo data for a create request.
 */
class IncidentTodoCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTodoCreateData.attributeTypeMap;
    }
}
exports.IncidentTodoCreateData = IncidentTodoCreateData;
/**
 * @ignore
 */
IncidentTodoCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentTodoAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentTodoType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTodoCreateData.js.map