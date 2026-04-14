"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsigAPIKeyUpdate = void 0;
/**
 * The definition of the `StatsigAPIKey` object.
 */
class StatsigAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatsigAPIKeyUpdate.attributeTypeMap;
    }
}
exports.StatsigAPIKeyUpdate = StatsigAPIKeyUpdate;
/**
 * @ignore
 */
StatsigAPIKeyUpdate.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
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
//# sourceMappingURL=StatsigAPIKeyUpdate.js.map