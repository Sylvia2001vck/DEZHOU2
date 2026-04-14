"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateTemplateVariablesItems = void 0;
/**
 * List of objects representing template variables on the monitor which can have selectable values.
 */
class MonitorUserTemplateTemplateVariablesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateTemplateVariablesItems.attributeTypeMap;
    }
}
exports.MonitorUserTemplateTemplateVariablesItems = MonitorUserTemplateTemplateVariablesItems;
/**
 * @ignore
 */
MonitorUserTemplateTemplateVariablesItems.attributeTypeMap = {
    availableValues: {
        baseName: "available_values",
        type: "Array<string>",
    },
    defaults: {
        baseName: "defaults",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    tagKey: {
        baseName: "tag_key",
        type: "string",
    },
};
//# sourceMappingURL=MonitorUserTemplateTemplateVariablesItems.js.map