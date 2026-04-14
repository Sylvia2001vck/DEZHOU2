"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionCreate = void 0;
/**
 * Org connection creation data.
 */
class OrgConnectionCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionCreate.attributeTypeMap;
    }
}
exports.OrgConnectionCreate = OrgConnectionCreate;
/**
 * @ignore
 */
OrgConnectionCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OrgConnectionCreateAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "OrgConnectionCreateRelationships",
        required: true,
    },
    type: {
        baseName: "type",
        type: "OrgConnectionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionCreate.js.map