"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreshserviceIntegrationUpdate = void 0;
/**
 * The definition of the `FreshserviceIntegrationUpdate` object.
 */
class FreshserviceIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FreshserviceIntegrationUpdate.attributeTypeMap;
    }
}
exports.FreshserviceIntegrationUpdate = FreshserviceIntegrationUpdate;
/**
 * @ignore
 */
FreshserviceIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "FreshserviceCredentialsUpdate",
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
//# sourceMappingURL=FreshserviceIntegrationUpdate.js.map