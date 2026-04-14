"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsResponseMeta = void 0;
/**
 * Teams response metadata.
 */
class TeamsResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamsResponseMeta.attributeTypeMap;
    }
}
exports.TeamsResponseMeta = TeamsResponseMeta;
/**
 * @ignore
 */
TeamsResponseMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "TeamsResponseMetaPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamsResponseMeta.js.map