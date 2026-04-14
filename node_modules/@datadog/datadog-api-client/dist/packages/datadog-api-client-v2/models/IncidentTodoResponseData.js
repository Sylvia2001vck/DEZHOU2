"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTodoResponseData = void 0;
/**
 * Incident todo response data.
 */
class IncidentTodoResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTodoResponseData.attributeTypeMap;
    }
}
exports.IncidentTodoResponseData = IncidentTodoResponseData;
/**
 * @ignore
 */
IncidentTodoResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentTodoAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentTodoRelationships",
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
//# sourceMappingURL=IncidentTodoResponseData.js.map