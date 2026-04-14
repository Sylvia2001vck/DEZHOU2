"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTrigger = void 0;
/**
 * Trigger a workflow from an Incident. For automatic triggering a handle must be configured and the workflow must be published.
 */
class IncidentTrigger {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTrigger.attributeTypeMap;
    }
}
exports.IncidentTrigger = IncidentTrigger;
/**
 * @ignore
 */
IncidentTrigger.attributeTypeMap = {
    rateLimit: {
        baseName: "rateLimit",
        type: "TriggerRateLimit",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTrigger.js.map