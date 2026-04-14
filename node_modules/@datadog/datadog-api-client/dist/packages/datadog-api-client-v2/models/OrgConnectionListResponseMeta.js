"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionListResponseMeta = void 0;
/**
 * Pagination metadata.
 */
class OrgConnectionListResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionListResponseMeta.attributeTypeMap;
    }
}
exports.OrgConnectionListResponseMeta = OrgConnectionListResponseMeta;
/**
 * @ignore
 */
OrgConnectionListResponseMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "OrgConnectionListResponseMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionListResponseMeta.js.map