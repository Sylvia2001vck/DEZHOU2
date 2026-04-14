"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackIntegrationMetadata = void 0;
/**
 * Incident integration metadata for the Slack integration.
 */
class SlackIntegrationMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SlackIntegrationMetadata.attributeTypeMap;
    }
}
exports.SlackIntegrationMetadata = SlackIntegrationMetadata;
/**
 * @ignore
 */
SlackIntegrationMetadata.attributeTypeMap = {
    channels: {
        baseName: "channels",
        type: "Array<SlackIntegrationMetadataChannelItem>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SlackIntegrationMetadata.js.map