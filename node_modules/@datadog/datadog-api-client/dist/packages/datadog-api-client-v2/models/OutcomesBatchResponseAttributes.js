"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesBatchResponseAttributes = void 0;
/**
 * The JSON:API attributes for an outcome.
 */
class OutcomesBatchResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutcomesBatchResponseAttributes.attributeTypeMap;
    }
}
exports.OutcomesBatchResponseAttributes = OutcomesBatchResponseAttributes;
/**
 * @ignore
 */
OutcomesBatchResponseAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    remarks: {
        baseName: "remarks",
        type: "string",
    },
    serviceName: {
        baseName: "service_name",
        type: "string",
    },
    state: {
        baseName: "state",
        type: "State",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutcomesBatchResponseAttributes.js.map