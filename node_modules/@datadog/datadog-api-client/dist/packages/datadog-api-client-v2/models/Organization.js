"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
/**
 * Organization object.
 */
class Organization {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Organization.attributeTypeMap;
    }
}
exports.Organization = Organization;
/**
 * @ignore
 */
Organization.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OrganizationAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "OrganizationsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Organization.js.map