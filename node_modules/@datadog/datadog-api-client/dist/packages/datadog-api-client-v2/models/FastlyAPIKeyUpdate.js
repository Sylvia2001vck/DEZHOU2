"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAPIKeyUpdate = void 0;
/**
 * The definition of the `FastlyAPIKey` object.
 */
class FastlyAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAPIKeyUpdate.attributeTypeMap;
    }
}
exports.FastlyAPIKeyUpdate = FastlyAPIKeyUpdate;
/**
 * @ignore
 */
FastlyAPIKeyUpdate.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
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
//# sourceMappingURL=FastlyAPIKeyUpdate.js.map