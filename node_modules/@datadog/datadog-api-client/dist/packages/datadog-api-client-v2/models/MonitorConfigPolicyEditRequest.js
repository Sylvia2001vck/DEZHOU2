"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyEditRequest = void 0;
/**
 * Request for editing a monitor configuration policy.
 */
class MonitorConfigPolicyEditRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyEditRequest.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyEditRequest = MonitorConfigPolicyEditRequest;
/**
 * @ignore
 */
MonitorConfigPolicyEditRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MonitorConfigPolicyEditData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorConfigPolicyEditRequest.js.map