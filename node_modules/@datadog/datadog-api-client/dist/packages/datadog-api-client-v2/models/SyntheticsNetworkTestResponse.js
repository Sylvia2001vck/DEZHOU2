"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkTestResponse = void 0;
/**
 * Network Path test response.
 */
class SyntheticsNetworkTestResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkTestResponse.attributeTypeMap;
    }
}
exports.SyntheticsNetworkTestResponse = SyntheticsNetworkTestResponse;
/**
 * @ignore
 */
SyntheticsNetworkTestResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SyntheticsNetworkTestResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkTestResponse.js.map