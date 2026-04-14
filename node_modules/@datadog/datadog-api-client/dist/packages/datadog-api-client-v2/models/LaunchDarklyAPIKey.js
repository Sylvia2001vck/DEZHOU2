"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchDarklyAPIKey = void 0;
/**
 * The definition of the `LaunchDarklyAPIKey` object.
 */
class LaunchDarklyAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LaunchDarklyAPIKey.attributeTypeMap;
    }
}
exports.LaunchDarklyAPIKey = LaunchDarklyAPIKey;
/**
 * @ignore
 */
LaunchDarklyAPIKey.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LaunchDarklyAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LaunchDarklyAPIKey.js.map