"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreyNoiseAPIKeyUpdate = void 0;
/**
 * The definition of the `GreyNoiseAPIKey` object.
 */
class GreyNoiseAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GreyNoiseAPIKeyUpdate.attributeTypeMap;
    }
}
exports.GreyNoiseAPIKeyUpdate = GreyNoiseAPIKeyUpdate;
/**
 * @ignore
 */
GreyNoiseAPIKeyUpdate.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
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
//# sourceMappingURL=GreyNoiseAPIKeyUpdate.js.map