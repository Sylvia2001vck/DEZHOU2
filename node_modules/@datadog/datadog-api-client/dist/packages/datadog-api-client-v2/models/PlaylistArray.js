"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistArray = void 0;
class PlaylistArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PlaylistArray.attributeTypeMap;
    }
}
exports.PlaylistArray = PlaylistArray;
/**
 * @ignore
 */
PlaylistArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<PlaylistData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PlaylistArray.js.map