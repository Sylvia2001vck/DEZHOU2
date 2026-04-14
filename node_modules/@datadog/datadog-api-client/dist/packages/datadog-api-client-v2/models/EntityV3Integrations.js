"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3Integrations = void 0;
/**
 * A base schema for defining third-party integrations.
 */
class EntityV3Integrations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3Integrations.attributeTypeMap;
    }
}
exports.EntityV3Integrations = EntityV3Integrations;
/**
 * @ignore
 */
EntityV3Integrations.attributeTypeMap = {
    opsgenie: {
        baseName: "opsgenie",
        type: "EntityV3DatadogIntegrationOpsgenie",
    },
    pagerduty: {
        baseName: "pagerduty",
        type: "EntityV3DatadogIntegrationPagerduty",
    },
};
//# sourceMappingURL=EntityV3Integrations.js.map