"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsgenieServiceUpdateRequest = void 0;
/**
 * Update request for an Opsgenie service.
 */
class OpsgenieServiceUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpsgenieServiceUpdateRequest.attributeTypeMap;
    }
}
exports.OpsgenieServiceUpdateRequest = OpsgenieServiceUpdateRequest;
/**
 * @ignore
 */
OpsgenieServiceUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OpsgenieServiceUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpsgenieServiceUpdateRequest.js.map