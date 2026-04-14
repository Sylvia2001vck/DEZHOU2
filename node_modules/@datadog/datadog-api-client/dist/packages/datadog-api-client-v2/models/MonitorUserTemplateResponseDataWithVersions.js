"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateResponseDataWithVersions = void 0;
/**
 * Monitor user template data.
 */
class MonitorUserTemplateResponseDataWithVersions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateResponseDataWithVersions.attributeTypeMap;
    }
}
exports.MonitorUserTemplateResponseDataWithVersions = MonitorUserTemplateResponseDataWithVersions;
/**
 * @ignore
 */
MonitorUserTemplateResponseDataWithVersions.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorUserTemplate",
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
//# sourceMappingURL=MonitorUserTemplateResponseDataWithVersions.js.map