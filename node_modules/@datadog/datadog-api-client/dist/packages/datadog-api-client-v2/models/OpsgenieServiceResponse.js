"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsgenieServiceResponse = void 0;
/**
 * Response of an Opsgenie service.
 */
class OpsgenieServiceResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpsgenieServiceResponse.attributeTypeMap;
    }
}
exports.OpsgenieServiceResponse = OpsgenieServiceResponse;
/**
 * @ignore
 */
OpsgenieServiceResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OpsgenieServiceResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpsgenieServiceResponse.js.map