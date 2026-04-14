"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnDemandConcurrencyCapAttributes = void 0;
/**
 * On-demand concurrency cap attributes.
 */
class OnDemandConcurrencyCapAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnDemandConcurrencyCapAttributes.attributeTypeMap;
    }
}
exports.OnDemandConcurrencyCapAttributes = OnDemandConcurrencyCapAttributes;
/**
 * @ignore
 */
OnDemandConcurrencyCapAttributes.attributeTypeMap = {
    onDemandConcurrencyCap: {
        baseName: "on_demand_concurrency_cap",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnDemandConcurrencyCapAttributes.js.map