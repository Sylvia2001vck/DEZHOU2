"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOutcomesAsyncRequestItem = void 0;
/**
 * Scorecard outcome for a single entity and rule.
 */
class UpdateOutcomesAsyncRequestItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateOutcomesAsyncRequestItem.attributeTypeMap;
    }
}
exports.UpdateOutcomesAsyncRequestItem = UpdateOutcomesAsyncRequestItem;
/**
 * @ignore
 */
UpdateOutcomesAsyncRequestItem.attributeTypeMap = {
    entityReference: {
        baseName: "entity_reference",
        type: "string",
        required: true,
    },
    remarks: {
        baseName: "remarks",
        type: "string",
    },
    ruleId: {
        baseName: "rule_id",
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
//# sourceMappingURL=UpdateOutcomesAsyncRequestItem.js.map