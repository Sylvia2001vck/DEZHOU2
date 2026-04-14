"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HamrOrgConnectionRequest = void 0;
class HamrOrgConnectionRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HamrOrgConnectionRequest.attributeTypeMap;
    }
}
exports.HamrOrgConnectionRequest = HamrOrgConnectionRequest;
/**
 * @ignore
 */
HamrOrgConnectionRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "HamrOrgConnectionDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HamrOrgConnectionRequest.js.map