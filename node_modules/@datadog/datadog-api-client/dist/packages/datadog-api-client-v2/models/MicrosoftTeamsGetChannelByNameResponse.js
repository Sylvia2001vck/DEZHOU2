"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftTeamsGetChannelByNameResponse = void 0;
/**
 * Response with channel, team, and tenant ID information.
 */
class MicrosoftTeamsGetChannelByNameResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MicrosoftTeamsGetChannelByNameResponse.attributeTypeMap;
    }
}
exports.MicrosoftTeamsGetChannelByNameResponse = MicrosoftTeamsGetChannelByNameResponse;
/**
 * @ignore
 */
MicrosoftTeamsGetChannelByNameResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MicrosoftTeamsChannelInfoResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MicrosoftTeamsGetChannelByNameResponse.js.map