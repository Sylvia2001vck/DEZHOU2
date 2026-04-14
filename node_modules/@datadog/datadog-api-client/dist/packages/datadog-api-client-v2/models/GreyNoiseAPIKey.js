"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreyNoiseAPIKey = void 0;
/**
 * The definition of the `GreyNoiseAPIKey` object.
 */
class GreyNoiseAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GreyNoiseAPIKey.attributeTypeMap;
    }
}
exports.GreyNoiseAPIKey = GreyNoiseAPIKey;
/**
 * @ignore
 */
GreyNoiseAPIKey.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "GreyNoiseAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GreyNoiseAPIKey.js.map