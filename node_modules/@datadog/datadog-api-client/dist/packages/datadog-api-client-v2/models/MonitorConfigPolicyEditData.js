"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyEditData = void 0;
/**
 * A monitor configuration policy data.
 */
class MonitorConfigPolicyEditData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyEditData.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyEditData = MonitorConfigPolicyEditData;
/**
 * @ignore
 */
MonitorConfigPolicyEditData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorConfigPolicyAttributeEditRequest",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=MonitorConfigPolicyEditData.js.map