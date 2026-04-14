"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAccountResponseData = void 0;
/**
 * Data object of a Fastly account.
 */
class FastlyAccountResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAccountResponseData.attributeTypeMap;
    }
}
exports.FastlyAccountResponseData = FastlyAccountResponseData;
/**
 * @ignore
 */
FastlyAccountResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FastlyAccounResponseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FastlyAccountType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyAccountResponseData.js.map