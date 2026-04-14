"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3DatadogIntegrationPagerduty = void 0;
/**
 * A PagerDuty integration schema.
 */
class EntityV3DatadogIntegrationPagerduty {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3DatadogIntegrationPagerduty.attributeTypeMap;
    }
}
exports.EntityV3DatadogIntegrationPagerduty = EntityV3DatadogIntegrationPagerduty;
/**
 * @ignore
 */
EntityV3DatadogIntegrationPagerduty.attributeTypeMap = {
    serviceUrl: {
        baseName: "serviceURL",
        type: "string",
        required: true,
    },
};
//# sourceMappingURL=EntityV3DatadogIntegrationPagerduty.js.map