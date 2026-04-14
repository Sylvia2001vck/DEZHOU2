"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleUpdateResponse = void 0;
/**
 * Response containing information about an updated role.
 */
class RoleUpdateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleUpdateResponse.attributeTypeMap;
    }
}
exports.RoleUpdateResponse = RoleUpdateResponse;
/**
 * @ignore
 */
RoleUpdateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RoleUpdateResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleUpdateResponse.js.map