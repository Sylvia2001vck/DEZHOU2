"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleAggregatedDnsResponseDataAttributesGroupByItems = void 0;
/**
 * Attributes associated with a group by
 */
class SingleAggregatedDnsResponseDataAttributesGroupByItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SingleAggregatedDnsResponseDataAttributesGroupByItems.attributeTypeMap;
    }
}
exports.SingleAggregatedDnsResponseDataAttributesGroupByItems = SingleAggregatedDnsResponseDataAttributesGroupByItems;
/**
 * @ignore
 */
SingleAggregatedDnsResponseDataAttributesGroupByItems.attributeTypeMap = {
    key: {
        baseName: "key",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SingleAggregatedDnsResponseDataAttributesGroupByItems.js.map