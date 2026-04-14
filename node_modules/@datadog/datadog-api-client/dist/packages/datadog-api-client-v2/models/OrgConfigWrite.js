"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConfigWrite = void 0;
/**
 * An Org Config write operation.
 */
class OrgConfigWrite {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConfigWrite.attributeTypeMap;
    }
}
exports.OrgConfigWrite = OrgConfigWrite;
/**
 * @ignore
 */
OrgConfigWrite.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OrgConfigWriteAttributes",
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
//# sourceMappingURL=OrgConfigWrite.js.map