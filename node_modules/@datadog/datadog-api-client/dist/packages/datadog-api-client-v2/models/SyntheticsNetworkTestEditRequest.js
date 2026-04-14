"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkTestEditRequest = void 0;
/**
 * Network Path test request.
 */
class SyntheticsNetworkTestEditRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkTestEditRequest.attributeTypeMap;
    }
}
exports.SyntheticsNetworkTestEditRequest = SyntheticsNetworkTestEditRequest;
/**
 * @ignore
 */
SyntheticsNetworkTestEditRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SyntheticsNetworkTestEdit",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkTestEditRequest.js.map