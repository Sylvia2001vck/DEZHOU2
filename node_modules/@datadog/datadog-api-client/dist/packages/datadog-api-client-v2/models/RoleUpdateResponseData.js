"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateResponseData = void 0;
/**
 * Role object returned by the API.
 */
class RoleUpdateResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleUpdateResponseData.attributeTypeMap;
    }
}
exports.RoleUpdateResponseData = RoleUpdateResponseData;
/**
 * @ignore
 */
RoleUpdateResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RoleUpdateAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "RoleResponseRelationships",
    },
    type: {
        baseName: "type",
        type: "RolesType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleUpdateResponseData.js.map