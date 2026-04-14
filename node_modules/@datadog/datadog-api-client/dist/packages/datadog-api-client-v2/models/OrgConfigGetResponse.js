"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConfigGetResponse = void 0;
/**
 * A response with a single Org Config.
 */
class OrgConfigGetResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConfigGetResponse.attributeTypeMap;
    }
}
exports.OrgConfigGetResponse = OrgConfigGetResponse;
/**
 * @ignore
 */
OrgConfigGetResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OrgConfigRead",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConfigGetResponse.js.map