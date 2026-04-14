"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistsSessionArray = void 0;
class PlaylistsSessionArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PlaylistsSessionArray.attributeTypeMap;
    }
}
exports.PlaylistsSessionArray = PlaylistsSessionArray;
/**
 * @ignore
 */
PlaylistsSessionArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<PlaylistsSessionData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PlaylistsSessionArray.js.map