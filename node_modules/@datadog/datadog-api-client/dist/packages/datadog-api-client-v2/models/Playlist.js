"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
class Playlist {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Playlist.attributeTypeMap;
    }
}
exports.Playlist = Playlist;
/**
 * @ignore
 */
Playlist.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PlaylistData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Playlist.js.map