"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTodoCreateRequest = void 0;
/**
 * Create request for an incident todo.
 */
class IncidentTodoCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTodoCreateRequest.attributeTypeMap;
    }
}
exports.IncidentTodoCreateRequest = IncidentTodoCreateRequest;
/**
 * @ignore
 */
IncidentTodoCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentTodoCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTodoCreateRequest.js.map