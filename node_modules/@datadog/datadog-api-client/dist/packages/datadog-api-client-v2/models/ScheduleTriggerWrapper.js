"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleTriggerWrapper = void 0;
/**
 * Schema for a Schedule-based trigger.
 */
class ScheduleTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleTriggerWrapper.attributeTypeMap;
    }
}
exports.ScheduleTriggerWrapper = ScheduleTriggerWrapper;
/**
 * @ignore
 */
ScheduleTriggerWrapper.attributeTypeMap = {
    scheduleTrigger: {
        baseName: "scheduleTrigger",
        type: "ScheduleTrigger",
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
//# sourceMappingURL=ScheduleTriggerWrapper.js.map