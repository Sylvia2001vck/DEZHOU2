"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsChannelInfoResponseData = void 0;
/**
 * Channel data from a response.
 */
class MicrosoftTeamsChannelInfoResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsChannelInfoResponseData.attributeTypeMap;
    }
}
exports.MicrosoftTeamsChannelInfoResponseData = MicrosoftTeamsChannelInfoResponseData;
/**
 * @ignore
 */
MicrosoftTeamsChannelInfoResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MicrosoftTeamsChannelInfoResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MicrosoftTeamsChannelInfoType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsChannelInfoResponseData.js.map