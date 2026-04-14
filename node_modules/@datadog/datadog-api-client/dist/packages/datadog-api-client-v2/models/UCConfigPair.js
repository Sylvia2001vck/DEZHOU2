"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UCConfigPair = void 0;
/**
 * The definition of `UCConfigPair` object.
 */
class UCConfigPair {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UCConfigPair.attributeTypeMap;
    }
}
exports.UCConfigPair = UCConfigPair;
/**
 * @ignore
 */
UCConfigPair.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UCConfigPairData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UCConfigPair.js.map