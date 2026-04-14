"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsgenieServiceResponseAttributes = void 0;
/**
 * The attributes from an Opsgenie service response.
 */
class OpsgenieServiceResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpsgenieServiceResponseAttributes.attributeTypeMap;
    }
}
exports.OpsgenieServiceResponseAttributes = OpsgenieServiceResponseAttributes;
/**
 * @ignore
 */
OpsgenieServiceResponseAttributes.attributeTypeMap = {
    customUrl: {
        baseName: "custom_url",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    region: {
        baseName: "region",
        type: "OpsgenieServiceRegionType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpsgenieServiceResponseAttributes.js.map