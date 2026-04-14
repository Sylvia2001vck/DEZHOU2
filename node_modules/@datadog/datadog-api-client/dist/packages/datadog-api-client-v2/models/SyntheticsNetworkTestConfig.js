"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkTestConfig = void 0;
/**
 * Configuration object for a Network Path test.
 */
class SyntheticsNetworkTestConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkTestConfig.attributeTypeMap;
    }
}
exports.SyntheticsNetworkTestConfig = SyntheticsNetworkTestConfig;
/**
 * @ignore
 */
SyntheticsNetworkTestConfig.attributeTypeMap = {
    assertions: {
        baseName: "assertions",
        type: "Array<SyntheticsNetworkAssertion>",
    },
    request: {
        baseName: "request",
        type: "SyntheticsNetworkTestRequest",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkTestConfig.js.map