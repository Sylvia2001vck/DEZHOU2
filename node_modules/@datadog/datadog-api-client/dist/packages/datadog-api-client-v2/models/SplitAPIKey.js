"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitAPIKey = void 0;
/**
 * The definition of the `SplitAPIKey` object.
 */
class SplitAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SplitAPIKey.attributeTypeMap;
    }
}
exports.SplitAPIKey = SplitAPIKey;
/**
 * @ignore
 */
SplitAPIKey.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SplitAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SplitAPIKey.js.map