"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitAPIKeyUpdate = void 0;
/**
 * The definition of the `SplitAPIKey` object.
 */
class SplitAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SplitAPIKeyUpdate.attributeTypeMap;
    }
}
exports.SplitAPIKeyUpdate = SplitAPIKeyUpdate;
/**
 * @ignore
 */
SplitAPIKeyUpdate.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
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
//# sourceMappingURL=SplitAPIKeyUpdate.js.map