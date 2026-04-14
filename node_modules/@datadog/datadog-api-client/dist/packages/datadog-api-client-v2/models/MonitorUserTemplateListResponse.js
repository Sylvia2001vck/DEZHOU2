"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateListResponse = void 0;
/**
 * Response for retrieving all monitor user templates.
 */
class MonitorUserTemplateListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateListResponse.attributeTypeMap;
    }
}
exports.MonitorUserTemplateListResponse = MonitorUserTemplateListResponse;
/**
 * @ignore
 */
MonitorUserTemplateListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MonitorUserTemplateResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorUserTemplateListResponse.js.map