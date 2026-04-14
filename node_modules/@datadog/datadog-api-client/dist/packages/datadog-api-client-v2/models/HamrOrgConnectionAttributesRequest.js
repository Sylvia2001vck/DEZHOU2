"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HamrOrgConnectionAttributesRequest = void 0;
class HamrOrgConnectionAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HamrOrgConnectionAttributesRequest.attributeTypeMap;
    }
}
exports.HamrOrgConnectionAttributesRequest = HamrOrgConnectionAttributesRequest;
/**
 * @ignore
 */
HamrOrgConnectionAttributesRequest.attributeTypeMap = {
    hamrStatus: {
        baseName: "hamr_status",
        type: "HamrOrgConnectionStatus",
        required: true,
    },
    isPrimary: {
        baseName: "is_primary",
        type: "boolean",
        required: true,
    },
    modifiedBy: {
        baseName: "modified_by",
        type: "string",
        required: true,
    },
    targetOrgDatacenter: {
        baseName: "target_org_datacenter",
        type: "string",
        required: true,
    },
    targetOrgName: {
        baseName: "target_org_name",
        type: "string",
        required: true,
    },
    targetOrgUuid: {
        baseName: "target_org_uuid",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HamrOrgConnectionAttributesRequest.js.map