"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConfigListResponse = void 0;
/**
 * A response with multiple Org Configs.
 */
class OrgConfigListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConfigListResponse.attributeTypeMap;
    }
}
exports.OrgConfigListResponse = OrgConfigListResponse;
/**
 * @ignore
 */
OrgConfigListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<OrgConfigRead>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConfigListResponse.js.map