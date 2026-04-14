"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HamrOrgConnectionResponse = void 0;
class HamrOrgConnectionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HamrOrgConnectionResponse.attributeTypeMap;
    }
}
exports.HamrOrgConnectionResponse = HamrOrgConnectionResponse;
/**
 * @ignore
 */
HamrOrgConnectionResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "HamrOrgConnectionDataResponse",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HamrOrgConnectionResponse.js.map