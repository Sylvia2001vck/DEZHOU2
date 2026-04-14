"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsgenieServiceCreateRequest = void 0;
/**
 * Create request for an Opsgenie service.
 */
class OpsgenieServiceCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpsgenieServiceCreateRequest.attributeTypeMap;
    }
}
exports.OpsgenieServiceCreateRequest = OpsgenieServiceCreateRequest;
/**
 * @ignore
 */
OpsgenieServiceCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OpsgenieServiceCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpsgenieServiceCreateRequest.js.map