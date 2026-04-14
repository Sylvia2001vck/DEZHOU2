"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsgenieServiceUpdateAttributes = void 0;
/**
 * The Opsgenie service attributes for an update request.
 */
class OpsgenieServiceUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpsgenieServiceUpdateAttributes.attributeTypeMap;
    }
}
exports.OpsgenieServiceUpdateAttributes = OpsgenieServiceUpdateAttributes;
/**
 * @ignore
 */
OpsgenieServiceUpdateAttributes.attributeTypeMap = {
    customUrl: {
        baseName: "custom_url",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    opsgenieApiKey: {
        baseName: "opsgenie_api_key",
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
//# sourceMappingURL=OpsgenieServiceUpdateAttributes.js.map