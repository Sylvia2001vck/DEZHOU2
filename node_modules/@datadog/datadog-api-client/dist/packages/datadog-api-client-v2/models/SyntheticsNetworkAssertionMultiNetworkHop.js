"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkAssertionMultiNetworkHop = void 0;
/**
 * Multi-network hop assertion for a Network Path test.
 */
class SyntheticsNetworkAssertionMultiNetworkHop {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkAssertionMultiNetworkHop.attributeTypeMap;
    }
}
exports.SyntheticsNetworkAssertionMultiNetworkHop = SyntheticsNetworkAssertionMultiNetworkHop;
/**
 * @ignore
 */
SyntheticsNetworkAssertionMultiNetworkHop.attributeTypeMap = {
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
        type: "SyntheticsNetworkAssertionMultiNetworkHopType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkAssertionMultiNetworkHop.js.map