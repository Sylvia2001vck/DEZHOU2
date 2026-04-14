"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyCostAttributionAttributes = void 0;
/**
 * Cost Attribution by Tag for a given organization.
 */
class MonthlyCostAttributionAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonthlyCostAttributionAttributes.attributeTypeMap;
    }
}
exports.MonthlyCostAttributionAttributes = MonthlyCostAttributionAttributes;
/**
 * @ignore
 */
MonthlyCostAttributionAttributes.attributeTypeMap = {
    month: {
        baseName: "month",
        type: "Date",
        format: "date-time",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    tagConfigSource: {
        baseName: "tag_config_source",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "{ [key: string]: Array<string>; }",
    },
    updatedAt: {
        baseName: "updated_at",
        type: "string",
    },
    values: {
        baseName: "values",
        type: "any",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonthlyCostAttributionAttributes.js.map