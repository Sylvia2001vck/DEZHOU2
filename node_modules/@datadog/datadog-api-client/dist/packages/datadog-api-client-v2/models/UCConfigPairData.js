"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UCConfigPairData = void 0;
/**
 * The definition of `UCConfigPairData` object.
 */
class UCConfigPairData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UCConfigPairData.attributeTypeMap;
    }
}
exports.UCConfigPairData = UCConfigPairData;
/**
 * @ignore
 */
UCConfigPairData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UCConfigPairDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UCConfigPairDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UCConfigPairData.js.map