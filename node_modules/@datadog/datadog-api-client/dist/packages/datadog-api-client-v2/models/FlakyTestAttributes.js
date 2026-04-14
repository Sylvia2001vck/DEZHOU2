"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestAttributes = void 0;
/**
 * Attributes of a flaky test.
 */
class FlakyTestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestAttributes.attributeTypeMap;
    }
}
exports.FlakyTestAttributes = FlakyTestAttributes;
/**
 * @ignore
 */
FlakyTestAttributes.attributeTypeMap = {
    attemptToFixId: {
        baseName: "attempt_to_fix_id",
        type: "string",
    },
    codeowners: {
        baseName: "codeowners",
        type: "Array<string>",
    },
    envs: {
        baseName: "envs",
        type: "Array<string>",
    },
    firstFlakedBranch: {
        baseName: "first_flaked_branch",
        type: "string",
    },
    firstFlakedSha: {
        baseName: "first_flaked_sha",
        type: "string",
    },
    firstFlakedTs: {
        baseName: "first_flaked_ts",
        type: "number",
        format: "int64",
    },
    flakyCategory: {
        baseName: "flaky_category",
        type: "string",
    },
    flakyState: {
        baseName: "flaky_state",
        type: "FlakyTestAttributesFlakyState",
    },
    history: {
        baseName: "history",
        type: "Array<FlakyTestHistory>",
    },
    lastFlakedBranch: {
        baseName: "last_flaked_branch",
        type: "string",
    },
    lastFlakedSha: {
        baseName: "last_flaked_sha",
        type: "string",
    },
    lastFlakedTs: {
        baseName: "last_flaked_ts",
        type: "number",
        format: "int64",
    },
    module: {
        baseName: "module",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    pipelineStats: {
        baseName: "pipeline_stats",
        type: "FlakyTestPipelineStats",
    },
    services: {
        baseName: "services",
        type: "Array<string>",
    },
    suite: {
        baseName: "suite",
        type: "string",
    },
    testRunMetadata: {
        baseName: "test_run_metadata",
        type: "FlakyTestRunMetadata",
    },
    testStats: {
        baseName: "test_stats",
        type: "FlakyTestStats",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestAttributes.js.map