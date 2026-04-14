"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HamrOrgConnectionDataResponse = void 0;
class HamrOrgConnectionDataResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HamrOrgConnectionDataResponse.attributeTypeMap;
    }
}
exports.HamrOrgConnectionDataResponse = HamrOrgConnectionDataResponse;
/**
 * @ignore
 */
HamrOrgConnectionDataResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "HamrOrgConnectionAttributesResponse",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "HamrOrgConnectionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HamrOrgConnectionDataResponse.js.map