"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiAPIKeyUpdate = void 0;
/**
 * The definition of the `GeminiAPIKey` object.
 */
class GeminiAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GeminiAPIKeyUpdate.attributeTypeMap;
    }
}
exports.GeminiAPIKeyUpdate = GeminiAPIKeyUpdate;
/**
 * @ignore
 */
GeminiAPIKeyUpdate.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
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
//# sourceMappingURL=GeminiAPIKeyUpdate.js.map