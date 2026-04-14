"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkAssertionJitter = void 0;
/**
 * Jitter assertion for a Network Path test.
 */
class SyntheticsNetworkAssertionJitter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkAssertionJitter.attributeTypeMap;
    }
}
exports.SyntheticsNetworkAssertionJitter = SyntheticsNetworkAssertionJitter;
/**
 * @ignore
 */
SyntheticsNetworkAssertionJitter.attributeTypeMap = {
    operator: {
        baseName: "operator",
        type: "SyntheticsNetworkAssertionOperator",
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
        type: "SyntheticsNetworkAssertionJitterType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkAssertionJitter.js.map