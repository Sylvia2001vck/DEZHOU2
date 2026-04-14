"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreshserviceAPIKey = void 0;
/**
 * The definition of the `FreshserviceAPIKey` object.
 */
class FreshserviceAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FreshserviceAPIKey.attributeTypeMap;
    }
}
exports.FreshserviceAPIKey = FreshserviceAPIKey;
/**
 * @ignore
 */
FreshserviceAPIKey.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    domain: {
        baseName: "domain",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FreshserviceAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FreshserviceAPIKey.js.map