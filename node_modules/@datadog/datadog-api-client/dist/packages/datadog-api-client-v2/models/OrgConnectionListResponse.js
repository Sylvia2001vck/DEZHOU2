"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionListResponse = void 0;
/**
 * Response containing a list of org connections.
 */
class OrgConnectionListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionListResponse.attributeTypeMap;
    }
}
exports.OrgConnectionListResponse = OrgConnectionListResponse;
/**
 * @ignore
 */
OrgConnectionListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<OrgConnection>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "OrgConnectionListResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionListResponse.js.map