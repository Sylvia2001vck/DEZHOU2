"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIAPIKey = void 0;
/**
 * The definition of the `OpenAIAPIKey` object.
 */
class OpenAIAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpenAIAPIKey.attributeTypeMap;
    }
}
exports.OpenAIAPIKey = OpenAIAPIKey;
/**
 * @ignore
 */
OpenAIAPIKey.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "OpenAIAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpenAIAPIKey.js.map