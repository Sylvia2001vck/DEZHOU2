"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsigAPIKey = void 0;
/**
 * The definition of the `StatsigAPIKey` object.
 */
class StatsigAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatsigAPIKey.attributeTypeMap;
    }
}
exports.StatsigAPIKey = StatsigAPIKey;
/**
 * @ignore
 */
StatsigAPIKey.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "StatsigAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatsigAPIKey.js.map