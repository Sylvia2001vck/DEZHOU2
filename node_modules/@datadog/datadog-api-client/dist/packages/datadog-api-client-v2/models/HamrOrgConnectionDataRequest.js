"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HamrOrgConnectionDataRequest = void 0;
class HamrOrgConnectionDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HamrOrgConnectionDataRequest.attributeTypeMap;
    }
}
exports.HamrOrgConnectionDataRequest = HamrOrgConnectionDataRequest;
/**
 * @ignore
 */
HamrOrgConnectionDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "HamrOrgConnectionAttributesRequest",
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
//# sourceMappingURL=HamrOrgConnectionDataRequest.js.map