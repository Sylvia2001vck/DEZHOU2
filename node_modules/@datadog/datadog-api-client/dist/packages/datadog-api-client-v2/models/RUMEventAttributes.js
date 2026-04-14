"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMEventAttributes = void 0;
/**
 * JSON object containing all event attributes and their associated values.
 */
class RUMEventAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMEventAttributes.attributeTypeMap;
    }
}
exports.RUMEventAttributes = RUMEventAttributes;
/**
 * @ignore
 */
RUMEventAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "{ [key: string]: any; }",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    timestamp: {
        baseName: "timestamp",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMEventAttributes.js.map