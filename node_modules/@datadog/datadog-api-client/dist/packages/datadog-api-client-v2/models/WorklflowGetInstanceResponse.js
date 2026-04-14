"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorklflowGetInstanceResponse = void 0;
/**
 * The state of the given workflow instance.
 */
class WorklflowGetInstanceResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorklflowGetInstanceResponse.attributeTypeMap;
    }
}
exports.WorklflowGetInstanceResponse = WorklflowGetInstanceResponse;
/**
 * @ignore
 */
WorklflowGetInstanceResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "WorklflowGetInstanceResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorklflowGetInstanceResponse.js.map