"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTriggerWrapper = void 0;
/**
 * Schema for an Incident-based trigger.
 */
class IncidentTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTriggerWrapper.attributeTypeMap;
    }
}
exports.IncidentTriggerWrapper = IncidentTriggerWrapper;
/**
 * @ignore
 */
IncidentTriggerWrapper.attributeTypeMap = {
    incidentTrigger: {
        baseName: "incidentTrigger",
        type: "IncidentTrigger",
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
//# sourceMappingURL=IncidentTriggerWrapper.js.map