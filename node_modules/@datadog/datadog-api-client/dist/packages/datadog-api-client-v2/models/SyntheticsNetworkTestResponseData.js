"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsNetworkTestResponseData = void 0;
/**
 * Network Path test response data.
 */
class SyntheticsNetworkTestResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsNetworkTestResponseData.attributeTypeMap;
    }
}
exports.SyntheticsNetworkTestResponseData = SyntheticsNetworkTestResponseData;
/**
 * @ignore
 */
SyntheticsNetworkTestResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SyntheticsNetworkTest",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SyntheticsNetworkTestResponseType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsNetworkTestResponseData.js.map