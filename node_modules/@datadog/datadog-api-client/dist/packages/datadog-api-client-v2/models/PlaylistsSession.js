"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistsSession = void 0;
class PlaylistsSession {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PlaylistsSession.attributeTypeMap;
    }
}
exports.PlaylistsSession = PlaylistsSession;
/**
 * @ignore
 */
PlaylistsSession.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PlaylistsSessionData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PlaylistsSession.js.map