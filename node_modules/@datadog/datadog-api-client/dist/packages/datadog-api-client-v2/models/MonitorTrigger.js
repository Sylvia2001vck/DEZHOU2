"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorTrigger = void 0;
/**
 * Trigger a workflow from a Monitor. For automatic triggering a handle must be configured and the workflow must be published.
 */
class MonitorTrigger {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorTrigger.attributeTypeMap;
    }
}
exports.MonitorTrigger = MonitorTrigger;
/**
 * @ignore
 */
MonitorTrigger.attributeTypeMap = {
    rateLimit: {
        baseName: "rateLimit",
        type: "TriggerRateLimit",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorTrigger.js.map