"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionCreateAttributes = void 0;
/**
 * Attributes for creating an org connection.
 */
class OrgConnectionCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionCreateAttributes.attributeTypeMap;
    }
}
exports.OrgConnectionCreateAttributes = OrgConnectionCreateAttributes;
/**
 * @ignore
 */
OrgConnectionCreateAttributes.attributeTypeMap = {
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
//# sourceMappingURL=OrgConnectionCreateAttributes.js.map