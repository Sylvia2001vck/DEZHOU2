"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAPIKey = void 0;
/**
 * The definition of the `FastlyAPIKey` object.
 */
class FastlyAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAPIKey.attributeTypeMap;
    }
}
exports.FastlyAPIKey = FastlyAPIKey;
/**
 * @ignore
 */
FastlyAPIKey.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FastlyAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyAPIKey.js.map