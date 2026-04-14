"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreyNoiseIntegration = void 0;
/**
 * The definition of the `GreyNoiseIntegration` object.
 */
class GreyNoiseIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GreyNoiseIntegration.attributeTypeMap;
    }
}
exports.GreyNoiseIntegration = GreyNoiseIntegration;
/**
 * @ignore
 */
GreyNoiseIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "GreyNoiseCredentials",
        required: true,
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
//# sourceMappingURL=GreyNoiseIntegration.js.map