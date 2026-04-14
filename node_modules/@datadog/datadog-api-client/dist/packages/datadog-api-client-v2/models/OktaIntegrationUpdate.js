"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OktaIntegrationUpdate = void 0;
/**
 * The definition of the `OktaIntegrationUpdate` object.
 */
class OktaIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OktaIntegrationUpdate.attributeTypeMap;
    }
}
exports.OktaIntegrationUpdate = OktaIntegrationUpdate;
/**
 * @ignore
 */
OktaIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "OktaCredentialsUpdate",
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
//# sourceMappingURL=OktaIntegrationUpdate.js.map