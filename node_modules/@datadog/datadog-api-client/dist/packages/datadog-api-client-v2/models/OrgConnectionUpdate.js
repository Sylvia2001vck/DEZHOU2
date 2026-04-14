"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionUpdate = void 0;
/**
 * Org connection update data.
 */
class OrgConnectionUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionUpdate.attributeTypeMap;
    }
}
exports.OrgConnectionUpdate = OrgConnectionUpdate;
/**
 * @ignore
 */
OrgConnectionUpdate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OrgConnectionUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
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
//# sourceMappingURL=OrgConnectionUpdate.js.map