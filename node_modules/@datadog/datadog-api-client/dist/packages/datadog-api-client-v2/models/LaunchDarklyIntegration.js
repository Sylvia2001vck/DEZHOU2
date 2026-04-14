"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchDarklyIntegration = void 0;
/**
 * The definition of the `LaunchDarklyIntegration` object.
 */
class LaunchDarklyIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LaunchDarklyIntegration.attributeTypeMap;
    }
}
exports.LaunchDarklyIntegration = LaunchDarklyIntegration;
/**
 * @ignore
 */
LaunchDarklyIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "LaunchDarklyCredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LaunchDarklyIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LaunchDarklyIntegration.js.map