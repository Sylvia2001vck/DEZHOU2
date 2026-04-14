"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyResponseData = void 0;
/**
 * A monitor configuration policy data.
 */
class MonitorConfigPolicyResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyResponseData.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyResponseData = MonitorConfigPolicyResponseData;
/**
 * @ignore
 */
MonitorConfigPolicyResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorConfigPolicyAttributeResponse",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MonitorConfigPolicyResourceType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorConfigPolicyResponseData.js.map