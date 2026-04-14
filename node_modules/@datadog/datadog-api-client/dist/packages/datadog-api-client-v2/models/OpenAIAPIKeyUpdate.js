"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIAPIKeyUpdate = void 0;
/**
 * The definition of the `OpenAIAPIKey` object.
 */
class OpenAIAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpenAIAPIKeyUpdate.attributeTypeMap;
    }
}
exports.OpenAIAPIKeyUpdate = OpenAIAPIKeyUpdate;
/**
 * @ignore
 */
OpenAIAPIKeyUpdate.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
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
//# sourceMappingURL=OpenAIAPIKeyUpdate.js.map