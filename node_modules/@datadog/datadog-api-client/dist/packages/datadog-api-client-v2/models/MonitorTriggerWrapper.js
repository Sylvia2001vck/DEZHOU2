"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorTriggerWrapper = void 0;
/**
 * Schema for a Monitor-based trigger.
 */
class MonitorTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorTriggerWrapper.attributeTypeMap;
    }
}
exports.MonitorTriggerWrapper = MonitorTriggerWrapper;
/**
 * @ignore
 */
MonitorTriggerWrapper.attributeTypeMap = {
    monitorTrigger: {
        baseName: "monitorTrigger",
        type: "MonitorTrigger",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorTriggerWrapper.js.map