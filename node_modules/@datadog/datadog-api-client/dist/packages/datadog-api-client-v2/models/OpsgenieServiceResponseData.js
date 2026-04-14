"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsgenieServiceResponseData = void 0;
/**
 * Opsgenie service data from a response.
 */
class OpsgenieServiceResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpsgenieServiceResponseData.attributeTypeMap;
    }
}
exports.OpsgenieServiceResponseData = OpsgenieServiceResponseData;
/**
 * @ignore
 */
OpsgenieServiceResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OpsgenieServiceResponseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "OpsgenieServiceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpsgenieServiceResponseData.js.map