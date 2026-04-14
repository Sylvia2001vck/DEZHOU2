"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleClone = void 0;
/**
 * Data for the clone role request.
 */
class RoleClone {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleClone.attributeTypeMap;
    }
}
exports.RoleClone = RoleClone;
/**
 * @ignore
 */
RoleClone.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RoleCloneAttributes",
        required: true,
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
//# sourceMappingURL=RoleClone.js.map