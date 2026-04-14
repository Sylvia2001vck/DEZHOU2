"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarMeta = void 0;
/**
 * Metadata for the resulting numerical values.
 */
class ScalarMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScalarMeta.attributeTypeMap;
    }
}
exports.ScalarMeta = ScalarMeta;
/**
 * @ignore
 */
ScalarMeta.attributeTypeMap = {
    unit: {
        baseName: "unit",
        type: "Array<Unit>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScalarMeta.js.map