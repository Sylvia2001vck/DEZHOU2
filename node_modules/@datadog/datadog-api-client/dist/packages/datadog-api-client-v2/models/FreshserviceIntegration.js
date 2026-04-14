"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreshserviceIntegration = void 0;
/**
 * The definition of the `FreshserviceIntegration` object.
 */
class FreshserviceIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FreshserviceIntegration.attributeTypeMap;
    }
}
exports.FreshserviceIntegration = FreshserviceIntegration;
/**
 * @ignore
 */
FreshserviceIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "FreshserviceCredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FreshserviceIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FreshserviceIntegration.js.map