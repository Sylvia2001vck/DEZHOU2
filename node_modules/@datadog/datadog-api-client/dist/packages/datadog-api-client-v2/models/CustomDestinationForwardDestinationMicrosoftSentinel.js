"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationForwardDestinationMicrosoftSentinel = void 0;
/**
 * The Microsoft Sentinel destination.
 */
class CustomDestinationForwardDestinationMicrosoftSentinel {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationForwardDestinationMicrosoftSentinel.attributeTypeMap;
    }
}
exports.CustomDestinationForwardDestinationMicrosoftSentinel = CustomDestinationForwardDestinationMicrosoftSentinel;
/**
 * @ignore
 */
CustomDestinationForwardDestinationMicrosoftSentinel.attributeTypeMap = {
    clientId: {
        baseName: "client_id",
        type: "string",
        required: true,
    },
    dataCollectionEndpoint: {
        baseName: "data_collection_endpoint",
        type: "string",
        required: true,
    },
    dataCollectionRuleId: {
        baseName: "data_collection_rule_id",
        type: "string",
        required: true,
    },
    streamName: {
        baseName: "stream_name",
        type: "string",
        required: true,
    },
    tenantId: {
        baseName: "tenant_id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomDestinationForwardDestinationMicrosoftSentinelType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationForwardDestinationMicrosoftSentinel.js.map