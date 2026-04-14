"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistData = void 0;
class PlaylistData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PlaylistData.attributeTypeMap;
    }
}
exports.PlaylistData = PlaylistData;
/**
 * @ignore
 */
PlaylistData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PlaylistDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "PlaylistDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PlaylistData.js.map