"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPIntegration = void 0;
/**
 * The definition of the `GCPIntegration` object.
 */
class GCPIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPIntegration.attributeTypeMap;
    }
}
exports.GCPIntegration = GCPIntegration;
/**
 * @ignore
 */
GCPIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "GCPCredentials",
        required: true,
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
//# sourceMappingURL=GCPIntegration.js.map