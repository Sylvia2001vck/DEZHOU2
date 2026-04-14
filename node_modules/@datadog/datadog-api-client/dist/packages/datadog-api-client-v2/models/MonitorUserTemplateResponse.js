"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateResponse = void 0;
/**
 * Response for retrieving a monitor user template.
 */
class MonitorUserTemplateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateResponse.attributeTypeMap;
    }
}
exports.MonitorUserTemplateResponse = MonitorUserTemplateResponse;
/**
 * @ignore
 */
MonitorUserTemplateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MonitorUserTemplateResponseDataWithVersions",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorUserTemplateResponse.js.map