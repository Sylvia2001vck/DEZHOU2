"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeakedKeyAttributes = void 0;
/**
 * The definition of LeakedKeyAttributes object.
 */
class LeakedKeyAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LeakedKeyAttributes.attributeTypeMap;
    }
}
exports.LeakedKeyAttributes = LeakedKeyAttributes;
/**
 * @ignore
 */
LeakedKeyAttributes.attributeTypeMap = {
    date: {
        baseName: "date",
        type: "Date",
        required: true,
        format: "date-time",
    },
    leakSource: {
        baseName: "leak_source",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LeakedKeyAttributes.js.map