"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateRequest = void 0;
/**
 * Create a role.
 */
class RoleCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleCreateRequest.attributeTypeMap;
    }
}
exports.RoleCreateRequest = RoleCreateRequest;
/**
 * @ignore
 */
RoleCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RoleCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleCreateRequest.js.map