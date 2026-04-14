"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionCreateRequest = void 0;
/**
 * Request to create an org connection.
 */
class OrgConnectionCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionCreateRequest.attributeTypeMap;
    }
}
exports.OrgConnectionCreateRequest = OrgConnectionCreateRequest;
/**
 * @ignore
 */
OrgConnectionCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OrgConnectionCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionCreateRequest.js.map