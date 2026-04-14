"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyCreateRequest = void 0;
/**
 * Request for creating a monitor configuration policy.
 */
class MonitorConfigPolicyCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyCreateRequest.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyCreateRequest = MonitorConfigPolicyCreateRequest;
/**
 * @ignore
 */
MonitorConfigPolicyCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MonitorConfigPolicyCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorConfigPolicyCreateRequest.js.map