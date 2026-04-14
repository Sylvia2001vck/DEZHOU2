"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateUpdateRequest = void 0;
/**
 * Request for creating a new monitor user template version.
 */
class MonitorUserTemplateUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateUpdateRequest.attributeTypeMap;
    }
}
exports.MonitorUserTemplateUpdateRequest = MonitorUserTemplateUpdateRequest;
/**
 * @ignore
 */
MonitorUserTemplateUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MonitorUserTemplateUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorUserTemplateUpdateRequest.js.map