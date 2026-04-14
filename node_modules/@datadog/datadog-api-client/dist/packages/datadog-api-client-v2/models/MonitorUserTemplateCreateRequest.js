"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateCreateRequest = void 0;
/**
 * Request for creating a monitor user template.
 */
class MonitorUserTemplateCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateCreateRequest.attributeTypeMap;
    }
}
exports.MonitorUserTemplateCreateRequest = MonitorUserTemplateCreateRequest;
/**
 * @ignore
 */
MonitorUserTemplateCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MonitorUserTemplateCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorUserTemplateCreateRequest.js.map