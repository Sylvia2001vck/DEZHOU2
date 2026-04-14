"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityTriggerWrapper = void 0;
/**
 * Schema for a Security-based trigger.
 */
class SecurityTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityTriggerWrapper.attributeTypeMap;
    }
}
exports.SecurityTriggerWrapper = SecurityTriggerWrapper;
/**
 * @ignore
 */
SecurityTriggerWrapper.attributeTypeMap = {
    securityTrigger: {
        baseName: "securityTrigger",
        type: "SecurityTrigger",
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
//# sourceMappingURL=SecurityTriggerWrapper.js.map