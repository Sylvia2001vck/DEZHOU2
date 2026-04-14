"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsSuite = void 0;
/**
 * Object containing details about a Synthetic suite.
 */
class SyntheticsSuite {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsSuite.attributeTypeMap;
    }
}
exports.SyntheticsSuite = SyntheticsSuite;
/**
 * @ignore
 */
SyntheticsSuite.attributeTypeMap = {
    message: {
        baseName: "message",
        type: "string",
    },
    monitorId: {
        baseName: "monitor_id",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    options: {
        baseName: "options",
        type: "SyntheticsSuiteOptions",
        required: true,
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    tests: {
        baseName: "tests",
        type: "Array<SyntheticsSuiteTest>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SyntheticsSuiteType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsSuite.js.map