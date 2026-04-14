"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionAPIKeyUpdate = void 0;
/**
 * The definition of the `NotionAPIKey` object.
 */
class NotionAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotionAPIKeyUpdate.attributeTypeMap;
    }
}
exports.NotionAPIKeyUpdate = NotionAPIKeyUpdate;
/**
 * @ignore
 */
NotionAPIKeyUpdate.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
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
//# sourceMappingURL=NotionAPIKeyUpdate.js.map