"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateUpdateData = void 0;
/**
 * Monitor user template data.
 */
class MonitorUserTemplateUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateUpdateData.attributeTypeMap;
    }
}
exports.MonitorUserTemplateUpdateData = MonitorUserTemplateUpdateData;
/**
 * @ignore
 */
MonitorUserTemplateUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorUserTemplateRequestAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=MonitorUserTemplateUpdateData.js.map