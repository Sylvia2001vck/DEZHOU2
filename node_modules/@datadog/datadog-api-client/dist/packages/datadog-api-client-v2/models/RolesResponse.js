"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesResponse = void 0;
/**
 * Response containing information about multiple roles.
 */
class RolesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RolesResponse.attributeTypeMap;
    }
}
exports.RolesResponse = RolesResponse;
/**
 * @ignore
 */
RolesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Role>",
    },
    meta: {
        baseName: "meta",
        type: "ResponseMetaAttributes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RolesResponse.js.map