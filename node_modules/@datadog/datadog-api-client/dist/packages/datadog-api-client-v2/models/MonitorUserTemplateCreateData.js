"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateCreateData = void 0;
/**
 * Monitor user template data.
 */
class MonitorUserTemplateCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateCreateData.attributeTypeMap;
    }
}
exports.MonitorUserTemplateCreateData = MonitorUserTemplateCreateData;
/**
 * @ignore
 */
MonitorUserTemplateCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorUserTemplateRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MonitorUserTemplateResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorUserTemplateCreateData.js.map