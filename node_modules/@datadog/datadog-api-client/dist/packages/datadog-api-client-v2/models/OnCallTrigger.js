"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallTrigger = void 0;
/**
 * Trigger a workflow from an On-Call Page or On-Call Handover. For automatic triggering a handle must be configured and the workflow must be published.
 */
class OnCallTrigger {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnCallTrigger.attributeTypeMap;
    }
}
exports.OnCallTrigger = OnCallTrigger;
/**
 * @ignore
 */
OnCallTrigger.attributeTypeMap = {
    rateLimit: {
        baseName: "rateLimit",
        type: "TriggerRateLimit",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnCallTrigger.js.map