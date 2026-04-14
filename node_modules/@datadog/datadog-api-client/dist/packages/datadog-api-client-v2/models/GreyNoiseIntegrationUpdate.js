"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreyNoiseIntegrationUpdate = void 0;
/**
 * The definition of the `GreyNoiseIntegrationUpdate` object.
 */
class GreyNoiseIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GreyNoiseIntegrationUpdate.attributeTypeMap;
    }
}
exports.GreyNoiseIntegrationUpdate = GreyNoiseIntegrationUpdate;
/**
 * @ignore
 */
GreyNoiseIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "GreyNoiseCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "GreyNoiseIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GreyNoiseIntegrationUpdate.js.map