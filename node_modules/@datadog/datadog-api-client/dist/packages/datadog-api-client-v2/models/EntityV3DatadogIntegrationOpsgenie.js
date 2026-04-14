"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3DatadogIntegrationOpsgenie = void 0;
/**
 * An Opsgenie integration schema.
 */
class EntityV3DatadogIntegrationOpsgenie {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3DatadogIntegrationOpsgenie.attributeTypeMap;
    }
}
exports.EntityV3DatadogIntegrationOpsgenie = EntityV3DatadogIntegrationOpsgenie;
/**
 * @ignore
 */
EntityV3DatadogIntegrationOpsgenie.attributeTypeMap = {
    region: {
        baseName: "region",
        type: "string",
    },
    serviceUrl: {
        baseName: "serviceURL",
        type: "string",
        required: true,
    },
};
//# sourceMappingURL=EntityV3DatadogIntegrationOpsgenie.js.map