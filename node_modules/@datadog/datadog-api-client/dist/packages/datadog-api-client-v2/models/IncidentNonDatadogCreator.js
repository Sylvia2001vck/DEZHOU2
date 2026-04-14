"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNonDatadogCreator = void 0;
/**
 * Incident's non Datadog creator.
 */
class IncidentNonDatadogCreator {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNonDatadogCreator.attributeTypeMap;
    }
}
exports.IncidentNonDatadogCreator = IncidentNonDatadogCreator;
/**
 * @ignore
 */
IncidentNonDatadogCreator.attributeTypeMap = {
    image48Px: {
        baseName: "image_48_px",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNonDatadogCreator.js.map