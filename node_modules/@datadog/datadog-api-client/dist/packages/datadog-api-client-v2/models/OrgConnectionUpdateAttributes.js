"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionUpdateAttributes = void 0;
/**
 * Attributes for updating an org connection.
 */
class OrgConnectionUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionUpdateAttributes.attributeTypeMap;
    }
}
exports.OrgConnectionUpdateAttributes = OrgConnectionUpdateAttributes;
/**
 * @ignore
 */
OrgConnectionUpdateAttributes.attributeTypeMap = {
    connectionTypes: {
        baseName: "connection_types",
        type: "Array<OrgConnectionTypeEnum>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionUpdateAttributes.js.map