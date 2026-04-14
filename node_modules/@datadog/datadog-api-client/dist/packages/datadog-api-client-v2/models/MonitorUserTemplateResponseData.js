"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateResponseData = void 0;
/**
 * Monitor user template list response data.
 */
class MonitorUserTemplateResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateResponseData.attributeTypeMap;
    }
}
exports.MonitorUserTemplateResponseData = MonitorUserTemplateResponseData;
/**
 * @ignore
 */
MonitorUserTemplateResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorUserTemplateResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MonitorUserTemplateResourceType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorUserTemplateResponseData.js.map