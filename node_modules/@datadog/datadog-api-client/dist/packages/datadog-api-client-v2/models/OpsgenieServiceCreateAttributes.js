"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpsgenieServiceCreateAttributes = void 0;
/**
 * The Opsgenie service attributes for a create request.
 */
class OpsgenieServiceCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpsgenieServiceCreateAttributes.attributeTypeMap;
    }
}
exports.OpsgenieServiceCreateAttributes = OpsgenieServiceCreateAttributes;
/**
 * @ignore
 */
OpsgenieServiceCreateAttributes.attributeTypeMap = {
    customUrl: {
        baseName: "custom_url",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    opsgenieApiKey: {
        baseName: "opsgenie_api_key",
        type: "string",
        required: true,
    },
    region: {
        baseName: "region",
        type: "OpsgenieServiceRegionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpsgenieServiceCreateAttributes.js.map