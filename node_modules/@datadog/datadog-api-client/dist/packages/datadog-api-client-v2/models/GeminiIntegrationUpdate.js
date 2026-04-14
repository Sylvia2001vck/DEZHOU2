"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiIntegrationUpdate = void 0;
/**
 * The definition of the `GeminiIntegrationUpdate` object.
 */
class GeminiIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GeminiIntegrationUpdate.attributeTypeMap;
    }
}
exports.GeminiIntegrationUpdate = GeminiIntegrationUpdate;
/**
 * @ignore
 */
GeminiIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "GeminiCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "GeminiIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GeminiIntegrationUpdate.js.map