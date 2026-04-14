"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTodoResponse = void 0;
/**
 * Response with an incident todo.
 */
class IncidentTodoResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTodoResponse.attributeTypeMap;
    }
}
exports.IncidentTodoResponse = IncidentTodoResponse;
/**
 * @ignore
 */
IncidentTodoResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentTodoResponseData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentTodoResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTodoResponse.js.map