"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDetectedIntegration = void 0;
/**
 * An integration detected on the agent but not necessarily configured.
 */
class FleetDetectedIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDetectedIntegration.attributeTypeMap;
    }
}
exports.FleetDetectedIntegration = FleetDetectedIntegration;
/**
 * @ignore
 */
FleetDetectedIntegration.attributeTypeMap = {
    escapedName: {
        baseName: "escaped_name",
        type: "string",
    },
    prefix: {
        baseName: "prefix",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDetectedIntegration.js.map