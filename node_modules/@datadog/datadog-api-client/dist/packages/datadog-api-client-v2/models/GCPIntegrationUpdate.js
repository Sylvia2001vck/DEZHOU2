"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPIntegrationUpdate = void 0;
/**
 * The definition of the `GCPIntegrationUpdate` object.
 */
class GCPIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPIntegrationUpdate.attributeTypeMap;
    }
}
exports.GCPIntegrationUpdate = GCPIntegrationUpdate;
/**
 * @ignore
 */
GCPIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "GCPCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "GCPIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPIntegrationUpdate.js.map