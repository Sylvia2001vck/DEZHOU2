"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateRequest = void 0;
/**
 * Update a role.
 */
class RoleUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleUpdateRequest.attributeTypeMap;
    }
}
exports.RoleUpdateRequest = RoleUpdateRequest;
/**
 * @ignore
 */
RoleUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RoleUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleUpdateRequest.js.map