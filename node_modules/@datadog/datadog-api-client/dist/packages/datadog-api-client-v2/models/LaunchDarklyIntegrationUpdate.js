"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchDarklyIntegrationUpdate = void 0;
/**
 * The definition of the `LaunchDarklyIntegrationUpdate` object.
 */
class LaunchDarklyIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LaunchDarklyIntegrationUpdate.attributeTypeMap;
    }
}
exports.LaunchDarklyIntegrationUpdate = LaunchDarklyIntegrationUpdate;
/**
 * @ignore
 */
LaunchDarklyIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "LaunchDarklyCredentialsUpdate",
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
//# sourceMappingURL=LaunchDarklyIntegrationUpdate.js.map