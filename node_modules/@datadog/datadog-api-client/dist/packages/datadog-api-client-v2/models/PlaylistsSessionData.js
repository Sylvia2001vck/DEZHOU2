"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistsSessionData = void 0;
class PlaylistsSessionData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PlaylistsSessionData.attributeTypeMap;
    }
}
exports.PlaylistsSessionData = PlaylistsSessionData;
/**
 * @ignore
 */
PlaylistsSessionData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PlaylistsSessionDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ViewershipHistorySessionDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PlaylistsSessionData.js.map