"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkTest = void 0;
/**
 * Object containing details about a Network Path test.
 */
class SyntheticsNetworkTest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkTest.attributeTypeMap;
    }
}
exports.SyntheticsNetworkTest = SyntheticsNetworkTest;
/**
 * @ignore
 */
SyntheticsNetworkTest.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "SyntheticsNetworkTestConfig",
        required: true,
    },
    locations: {
        baseName: "locations",
        type: "Array<string>",
        required: true,
    },
    message: {
        baseName: "message",
        type: "string",
        required: true,
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
        type: "SyntheticsTestOptions",
        required: true,
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "SyntheticsTestPauseStatus",
    },
    subtype: {
        baseName: "subtype",
        type: "SyntheticsNetworkTestSubType",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "SyntheticsNetworkTestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkTest.js.map