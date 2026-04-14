"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchDarklyAPIKeyUpdate = void 0;
/**
 * The definition of the `LaunchDarklyAPIKey` object.
 */
class LaunchDarklyAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LaunchDarklyAPIKeyUpdate.attributeTypeMap;
    }
}
exports.LaunchDarklyAPIKeyUpdate = LaunchDarklyAPIKeyUpdate;
/**
 * @ignore
 */
LaunchDarklyAPIKeyUpdate.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
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
//# sourceMappingURL=LaunchDarklyAPIKeyUpdate.js.map