"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatadogAPIKey = void 0;
/**
 * The definition of the `DatadogAPIKey` object.
 */
class DatadogAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatadogAPIKey.attributeTypeMap;
    }
}
exports.DatadogAPIKey = DatadogAPIKey;
/**
 * @ignore
 */
DatadogAPIKey.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    appKey: {
        baseName: "app_key",
        type: "string",
        required: true,
    },
    datacenter: {
        baseName: "datacenter",
        type: "string",
        required: true,
    },
    subdomain: {
        baseName: "subdomain",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DatadogAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatadogAPIKey.js.map