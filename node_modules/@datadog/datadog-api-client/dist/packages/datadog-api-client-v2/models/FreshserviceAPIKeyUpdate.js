"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreshserviceAPIKeyUpdate = void 0;
/**
 * The definition of the `FreshserviceAPIKey` object.
 */
class FreshserviceAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FreshserviceAPIKeyUpdate.attributeTypeMap;
    }
}
exports.FreshserviceAPIKeyUpdate = FreshserviceAPIKeyUpdate;
/**
 * @ignore
 */
FreshserviceAPIKeyUpdate.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
    },
    domain: {
        baseName: "domain",
        type: "string",
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
//# sourceMappingURL=FreshserviceAPIKeyUpdate.js.map