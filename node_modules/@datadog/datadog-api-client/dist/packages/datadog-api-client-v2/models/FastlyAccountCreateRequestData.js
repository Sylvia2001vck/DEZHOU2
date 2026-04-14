"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAccountCreateRequestData = void 0;
/**
 * Data object for creating a Fastly account.
 */
class FastlyAccountCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAccountCreateRequestData.attributeTypeMap;
    }
}
exports.FastlyAccountCreateRequestData = FastlyAccountCreateRequestData;
/**
 * @ignore
 */
FastlyAccountCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FastlyAccountCreateRequestAttributes",
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
//# sourceMappingURL=FastlyAccountCreateRequestData.js.map