"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsTestOptions = void 0;
/**
 * Object describing the extra options for a Synthetic test.
 */
class SyntheticsTestOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsTestOptions.attributeTypeMap;
    }
}
exports.SyntheticsTestOptions = SyntheticsTestOptions;
/**
 * @ignore
 */
SyntheticsTestOptions.attributeTypeMap = {
    minFailureDuration: {
        baseName: "min_failure_duration",
        type: "number",
        format: "int64",
    },
    minLocationFailed: {
        baseName: "min_location_failed",
        type: "number",
        format: "int64",
    },
    monitorName: {
        baseName: "monitor_name",
        type: "string",
    },
    monitorOptions: {
        baseName: "monitor_options",
        type: "SyntheticsTestOptionsMonitorOptions",
    },
    monitorPriority: {
        baseName: "monitor_priority",
        type: "number",
        format: "int32",
    },
    restrictedRoles: {
        baseName: "restricted_roles",
        type: "Array<string>",
    },
    retry: {
        baseName: "retry",
        type: "SyntheticsTestOptionsRetry",
    },
    scheduling: {
        baseName: "scheduling",
        type: "SyntheticsTestOptionsScheduling",
    },
    tickEvery: {
        baseName: "tick_every",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsTestOptions.js.map