"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirusTotalAPIKey = void 0;
/**
 * The definition of the `VirusTotalAPIKey` object.
 */
class VirusTotalAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VirusTotalAPIKey.attributeTypeMap;
    }
}
exports.VirusTotalAPIKey = VirusTotalAPIKey;
/**
 * @ignore
 */
VirusTotalAPIKey.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
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
//# sourceMappingURL=VirusTotalAPIKey.js.map