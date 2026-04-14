"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiIntegration = void 0;
/**
 * The definition of the `GeminiIntegration` object.
 */
class GeminiIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GeminiIntegration.attributeTypeMap;
    }
}
exports.GeminiIntegration = GeminiIntegration;
/**
 * @ignore
 */
GeminiIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "GeminiCredentials",
        required: true,
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
//# sourceMappingURL=GeminiIntegration.js.map