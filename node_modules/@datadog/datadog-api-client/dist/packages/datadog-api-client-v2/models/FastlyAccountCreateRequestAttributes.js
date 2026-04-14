"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAccountCreateRequestAttributes = void 0;
/**
 * Attributes object for creating a Fastly account.
 */
class FastlyAccountCreateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAccountCreateRequestAttributes.attributeTypeMap;
    }
}
exports.FastlyAccountCreateRequestAttributes = FastlyAccountCreateRequestAttributes;
/**
 * @ignore
 */
FastlyAccountCreateRequestAttributes.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    services: {
        baseName: "services",
        type: "Array<FastlyService>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyAccountCreateRequestAttributes.js.map