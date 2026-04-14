"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionAPIKey = void 0;
/**
 * The definition of the `NotionAPIKey` object.
 */
class NotionAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotionAPIKey.attributeTypeMap;
    }
}
exports.NotionAPIKey = NotionAPIKey;
/**
 * @ignore
 */
NotionAPIKey.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotionAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotionAPIKey.js.map