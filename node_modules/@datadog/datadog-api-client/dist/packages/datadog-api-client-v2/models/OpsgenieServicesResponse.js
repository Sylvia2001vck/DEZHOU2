"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsgenieServicesResponse = void 0;
/**
 * Response with a list of Opsgenie services.
 */
class OpsgenieServicesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpsgenieServicesResponse.attributeTypeMap;
    }
}
exports.OpsgenieServicesResponse = OpsgenieServicesResponse;
/**
 * @ignore
 */
OpsgenieServicesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<OpsgenieServiceResponseData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpsgenieServicesResponse.js.map