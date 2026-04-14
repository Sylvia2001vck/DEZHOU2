"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem = void 0;
/**
 * Single key-value pair used as a custom log header for Sumo Logic.
 */
class ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem.attributeTypeMap;
    }
}
exports.ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem = ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem;
/**
 * @ignore
 */
ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineSumoLogicDestinationHeaderCustomFieldsItem.js.map