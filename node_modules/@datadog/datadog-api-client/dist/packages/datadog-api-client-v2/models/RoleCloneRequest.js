"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCloneRequest = void 0;
/**
 * Request to create a role by cloning an existing role.
 */
class RoleCloneRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleCloneRequest.attributeTypeMap;
    }
}
exports.RoleCloneRequest = RoleCloneRequest;
/**
 * @ignore
 */
RoleCloneRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RoleClone",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleCloneRequest.js.map