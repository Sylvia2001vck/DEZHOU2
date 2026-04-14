"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAnalyticsAudienceSegmentSubquery = void 0;
/**
 * A segment-based audience query.
 */
class ProductAnalyticsAudienceSegmentSubquery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProductAnalyticsAudienceSegmentSubquery.attributeTypeMap;
    }
}
exports.ProductAnalyticsAudienceSegmentSubquery = ProductAnalyticsAudienceSegmentSubquery;
/**
 * @ignore
 */
ProductAnalyticsAudienceSegmentSubquery.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    segmentId: {
        baseName: "segment_id",
        type: "string",
        required: true,
        format: "uuid",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProductAnalyticsAudienceSegmentSubquery.js.map