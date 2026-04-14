"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionResponse = void 0;
/**
 * Response containing a single org connection.
 */
class OrgConnectionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionResponse.attributeTypeMap;
    }
}
exports.OrgConnectionResponse = OrgConnectionResponse;
/**
 * @ignore
 */
OrgConnectionResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OrgConnection",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionResponse.js.map