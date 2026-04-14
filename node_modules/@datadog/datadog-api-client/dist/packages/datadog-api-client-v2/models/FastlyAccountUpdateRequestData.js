"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAccountUpdateRequestData = void 0;
/**
 * Data object for updating a Fastly account.
 */
class FastlyAccountUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAccountUpdateRequestData.attributeTypeMap;
    }
}
exports.FastlyAccountUpdateRequestData = FastlyAccountUpdateRequestData;
/**
 * @ignore
 */
FastlyAccountUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FastlyAccountUpdateRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "FastlyAccountType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyAccountUpdateRequestData.js.map