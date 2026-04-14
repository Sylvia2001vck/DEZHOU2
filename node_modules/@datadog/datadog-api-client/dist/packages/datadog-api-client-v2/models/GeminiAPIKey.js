"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiAPIKey = void 0;
/**
 * The definition of the `GeminiAPIKey` object.
 */
class GeminiAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GeminiAPIKey.attributeTypeMap;
    }
}
exports.GeminiAPIKey = GeminiAPIKey;
/**
 * @ignore
 */
GeminiAPIKey.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "GeminiAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GeminiAPIKey.js.map