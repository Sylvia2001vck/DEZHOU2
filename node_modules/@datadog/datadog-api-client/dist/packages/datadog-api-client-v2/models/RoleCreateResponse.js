"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCreateResponse = void 0;
/**
 * Response containing information about a created role.
 */
class RoleCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleCreateResponse.attributeTypeMap;
    }
}
exports.RoleCreateResponse = RoleCreateResponse;
/**
 * @ignore
 */
RoleCreateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RoleCreateResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleCreateResponse.js.map