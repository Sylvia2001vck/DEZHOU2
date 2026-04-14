"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConfigRead = void 0;
/**
 * A single Org Config.
 */
class OrgConfigRead {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConfigRead.attributeTypeMap;
    }
}
exports.OrgConfigRead = OrgConfigRead;
/**
 * @ignore
 */
OrgConfigRead.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OrgConfigReadAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "OrgConfigType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConfigRead.js.map