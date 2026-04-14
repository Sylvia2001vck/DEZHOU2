"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatadogAPIKeyUpdate = void 0;
/**
 * The definition of the `DatadogAPIKey` object.
 */
class DatadogAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatadogAPIKeyUpdate.attributeTypeMap;
    }
}
exports.DatadogAPIKeyUpdate = DatadogAPIKeyUpdate;
/**
 * @ignore
 */
DatadogAPIKeyUpdate.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
    },
    appKey: {
        baseName: "app_key",
        type: "string",
    },
    datacenter: {
        baseName: "datacenter",
        type: "string",
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
//# sourceMappingURL=DatadogAPIKeyUpdate.js.map