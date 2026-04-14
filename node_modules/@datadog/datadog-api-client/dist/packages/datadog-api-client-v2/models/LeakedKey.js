"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeakedKey = void 0;
/**
 * The definition of LeakedKey object.
 */
class LeakedKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LeakedKey.attributeTypeMap;
    }
}
exports.LeakedKey = LeakedKey;
/**
 * @ignore
 */
LeakedKey.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LeakedKeyAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LeakedKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LeakedKey.js.map