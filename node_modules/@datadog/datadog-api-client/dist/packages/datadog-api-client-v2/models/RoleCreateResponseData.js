"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateResponseData = void 0;
/**
 * Role object returned by the API.
 */
class RoleCreateResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleCreateResponseData.attributeTypeMap;
    }
}
exports.RoleCreateResponseData = RoleCreateResponseData;
/**
 * @ignore
 */
RoleCreateResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RoleCreateAttributes",
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
//# sourceMappingURL=RoleCreateResponseData.js.map