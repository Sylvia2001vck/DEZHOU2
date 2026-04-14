"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirusTotalIntegrationUpdate = void 0;
/**
 * The definition of the `VirusTotalIntegrationUpdate` object.
 */
class VirusTotalIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VirusTotalIntegrationUpdate.attributeTypeMap;
    }
}
exports.VirusTotalIntegrationUpdate = VirusTotalIntegrationUpdate;
/**
 * @ignore
 */
VirusTotalIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "VirusTotalCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "VirusTotalIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VirusTotalIntegrationUpdate.js.map