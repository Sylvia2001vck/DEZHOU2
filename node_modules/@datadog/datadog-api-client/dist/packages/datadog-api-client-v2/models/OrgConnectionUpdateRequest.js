"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionUpdateRequest = void 0;
/**
 * Request to update an org connection.
 */
class OrgConnectionUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionUpdateRequest.attributeTypeMap;
    }
}
exports.OrgConnectionUpdateRequest = OrgConnectionUpdateRequest;
/**
 * @ignore
 */
OrgConnectionUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OrgConnectionUpdate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionUpdateRequest.js.map