"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KindData = void 0;
/**
 * Schema that defines the structure of a Kind object in the Software Catalog.
 */
class KindData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return KindData.attributeTypeMap;
    }
}
exports.KindData = KindData;
/**
 * @ignore
 */
KindData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "KindAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    meta: {
        baseName: "meta",
        type: "KindMetadata",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=KindData.js.map