"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatadogIntegration = void 0;
/**
 * The definition of the `DatadogIntegration` object.
 */
class DatadogIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatadogIntegration.attributeTypeMap;
    }
}
exports.DatadogIntegration = DatadogIntegration;
/**
 * @ignore
 */
DatadogIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "DatadogCredentials",
        required: true,
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
//# sourceMappingURL=DatadogIntegration.js.map