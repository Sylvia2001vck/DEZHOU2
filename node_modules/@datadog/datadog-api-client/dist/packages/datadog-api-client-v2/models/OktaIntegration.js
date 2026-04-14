"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaIntegration = void 0;
/**
 * The definition of the `OktaIntegration` object.
 */
class OktaIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaIntegration.attributeTypeMap;
    }
}
exports.OktaIntegration = OktaIntegration;
/**
 * @ignore
 */
OktaIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "OktaCredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "OktaIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OktaIntegration.js.map