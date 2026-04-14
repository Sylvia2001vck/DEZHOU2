"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionAttributes = void 0;
/**
 * Org connection attributes.
 */
class OrgConnectionAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionAttributes.attributeTypeMap;
    }
}
exports.OrgConnectionAttributes = OrgConnectionAttributes;
/**
 * @ignore
 */
OrgConnectionAttributes.attributeTypeMap = {
    connectionTypes: {
        baseName: "connection_types",
        type: "Array<OrgConnectionTypeEnum>",
        required: true,
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionAttributes.js.map