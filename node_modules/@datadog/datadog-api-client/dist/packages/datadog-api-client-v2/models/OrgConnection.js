"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnection = void 0;
/**
 * An org connection.
 */
class OrgConnection {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnection.attributeTypeMap;
    }
}
exports.OrgConnection = OrgConnection;
/**
 * @ignore
 */
OrgConnection.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OrgConnectionAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    relationships: {
        baseName: "relationships",
        type: "OrgConnectionRelationships",
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
//# sourceMappingURL=OrgConnection.js.map