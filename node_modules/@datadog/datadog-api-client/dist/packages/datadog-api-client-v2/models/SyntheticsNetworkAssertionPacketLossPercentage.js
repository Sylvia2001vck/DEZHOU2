"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkAssertionPacketLossPercentage = void 0;
/**
 * Packet loss percentage assertion for a Network Path test.
 */
class SyntheticsNetworkAssertionPacketLossPercentage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkAssertionPacketLossPercentage.attributeTypeMap;
    }
}
exports.SyntheticsNetworkAssertionPacketLossPercentage = SyntheticsNetworkAssertionPacketLossPercentage;
/**
 * @ignore
 */
SyntheticsNetworkAssertionPacketLossPercentage.attributeTypeMap = {
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
        type: "SyntheticsNetworkAssertionPacketLossPercentageType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkAssertionPacketLossPercentage.js.map