"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkAssertionLatency = void 0;
/**
 * Network latency assertion for a Network Path test.
 */
class SyntheticsNetworkAssertionLatency {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkAssertionLatency.attributeTypeMap;
    }
}
exports.SyntheticsNetworkAssertionLatency = SyntheticsNetworkAssertionLatency;
/**
 * @ignore
 */
SyntheticsNetworkAssertionLatency.attributeTypeMap = {
    operator: {
        baseName: "operator",
        type: "SyntheticsNetworkAssertionOperator",
        required: true,
    },
    property: {
        baseName: "property",
        type: "SyntheticsNetworkAssertionProperty",
        required: true,
    },
    target: {
        baseName: "target",
        type: "number",
        required: true,
        format: "double",
    },
    type: {
        baseName: "type",
        type: "SyntheticsNetworkAssertionLatencyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkAssertionLatency.js.map