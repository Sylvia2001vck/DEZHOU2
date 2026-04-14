"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistDataAttributes = void 0;
class PlaylistDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PlaylistDataAttributes.attributeTypeMap;
    }
}
exports.PlaylistDataAttributes = PlaylistDataAttributes;
/**
 * @ignore
 */
PlaylistDataAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    createdBy: {
        baseName: "created_by",
        type: "PlaylistDataAttributesCreatedBy",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    sessionCount: {
        baseName: "session_count",
        type: "number",
        format: "int64",
    },
    updatedAt: {
        baseName: "updated_at",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PlaylistDataAttributes.js.map