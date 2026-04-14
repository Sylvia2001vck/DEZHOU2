"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleResponse = void 0;
/**
 * Response containing information about a single role.
 */
class RoleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleResponse.attributeTypeMap;
    }
}
exports.RoleResponse = RoleResponse;
/**
 * @ignore
 */
RoleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Role",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleResponse.js.map