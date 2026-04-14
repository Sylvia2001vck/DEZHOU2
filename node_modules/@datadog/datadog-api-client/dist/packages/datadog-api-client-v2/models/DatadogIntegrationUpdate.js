"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatadogIntegrationUpdate = void 0;
/**
 * The definition of the `DatadogIntegrationUpdate` object.
 */
class DatadogIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatadogIntegrationUpdate.attributeTypeMap;
    }
}
exports.DatadogIntegrationUpdate = DatadogIntegrationUpdate;
/**
 * @ignore
 */
DatadogIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "DatadogCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "DatadogIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatadogIntegrationUpdate.js.map