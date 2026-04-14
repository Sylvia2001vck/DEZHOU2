"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirusTotalAPIKeyUpdate = void 0;
/**
 * The definition of the `VirusTotalAPIKey` object.
 */
class VirusTotalAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VirusTotalAPIKeyUpdate.attributeTypeMap;
    }
}
exports.VirusTotalAPIKeyUpdate = VirusTotalAPIKeyUpdate;
/**
 * @ignore
 */
VirusTotalAPIKeyUpdate.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "VirusTotalAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VirusTotalAPIKeyUpdate.js.map