"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UCConfigPairDataAttributes = void 0;
/**
 * The definition of `UCConfigPairDataAttributes` object.
 */
class UCConfigPairDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UCConfigPairDataAttributes.attributeTypeMap;
    }
}
exports.UCConfigPairDataAttributes = UCConfigPairDataAttributes;
/**
 * @ignore
 */
UCConfigPairDataAttributes.attributeTypeMap = {
    configs: {
        baseName: "configs",
        type: "Array<UCConfigPairDataAttributesConfigsItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UCConfigPairDataAttributes.js.map