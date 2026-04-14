"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTodoPatchData = void 0;
/**
 * Incident todo data for a patch request.
 */
class IncidentTodoPatchData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTodoPatchData.attributeTypeMap;
    }
}
exports.IncidentTodoPatchData = IncidentTodoPatchData;
/**
 * @ignore
 */
IncidentTodoPatchData.attributeTypeMap = {
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
//# sourceMappingURL=IncidentTodoPatchData.js.map