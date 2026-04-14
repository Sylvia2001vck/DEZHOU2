"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateCreateResponse = void 0;
/**
 * Response for creating a monitor user template.
 */
class MonitorUserTemplateCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateCreateResponse.attributeTypeMap;
    }
}
exports.MonitorUserTemplateCreateResponse = MonitorUserTemplateCreateResponse;
/**
 * @ignore
 */
MonitorUserTemplateCreateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MonitorUserTemplateResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorUserTemplateCreateResponse.js.map