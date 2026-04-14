"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyCreateData = void 0;
/**
 * A monitor configuration policy data.
 */
class MonitorConfigPolicyCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyCreateData.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyCreateData = MonitorConfigPolicyCreateData;
/**
 * @ignore
 */
MonitorConfigPolicyCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorConfigPolicyAttributeCreateRequest",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MonitorConfigPolicyResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorConfigPolicyCreateData.js.map