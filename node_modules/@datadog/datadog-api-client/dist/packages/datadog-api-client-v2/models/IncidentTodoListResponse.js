"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTodoListResponse = void 0;
/**
 * Response with a list of incident todos.
 */
class IncidentTodoListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTodoListResponse.attributeTypeMap;
    }
}
exports.IncidentTodoListResponse = IncidentTodoListResponse;
/**
 * @ignore
 */
IncidentTodoListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IncidentTodoResponseData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentTodoResponseIncludedItem>",
    },
    meta: {
        baseName: "meta",
        type: "IncidentResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTodoListResponse.js.map