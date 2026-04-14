"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesBatchRequestItem = void 0;
/**
 * Scorecard outcome for a specific rule, for a given service within a batched update.
 */
class OutcomesBatchRequestItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutcomesBatchRequestItem.attributeTypeMap;
    }
}
exports.OutcomesBatchRequestItem = OutcomesBatchRequestItem;
/**
 * @ignore
 */
OutcomesBatchRequestItem.attributeTypeMap = {
    remarks: {
        baseName: "remarks",
        type: "string",
    },
    ruleId: {
        baseName: "rule_id",
        type: "string",
        required: true,
    },
    serviceName: {
        baseName: "service_name",
        type: "string",
        required: true,
    },
    state: {
        baseName: "state",
        type: "State",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutcomesBatchRequestItem.js.map