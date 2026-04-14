"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallTriggerWrapper = void 0;
/**
 * Schema for an On-Call-based trigger.
 */
class OnCallTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnCallTriggerWrapper.attributeTypeMap;
    }
}
exports.OnCallTriggerWrapper = OnCallTriggerWrapper;
/**
 * @ignore
 */
OnCallTriggerWrapper.attributeTypeMap = {
    onCallTrigger: {
        baseName: "onCallTrigger",
        type: "OnCallTrigger",
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
//# sourceMappingURL=OnCallTriggerWrapper.js.map