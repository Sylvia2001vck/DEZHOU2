"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityTrigger = void 0;
/**
 * Trigger a workflow from a Security Signal or Finding. For automatic triggering a handle must be configured and the workflow must be published.
 */
class SecurityTrigger {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityTrigger.attributeTypeMap;
    }
}
exports.SecurityTrigger = SecurityTrigger;
/**
 * @ignore
 */
SecurityTrigger.attributeTypeMap = {
    rateLimit: {
        baseName: "rateLimit",
        type: "TriggerRateLimit",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityTrigger.js.map