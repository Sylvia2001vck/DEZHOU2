"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateResponseAttributes = void 0;
/**
 * Attributes for a monitor user template.
 */
class MonitorUserTemplateResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateResponseAttributes.attributeTypeMap;
    }
}
exports.MonitorUserTemplateResponseAttributes = MonitorUserTemplateResponseAttributes;
/**
 * @ignore
 */
MonitorUserTemplateResponseAttributes.attributeTypeMap = {
    created: {
        baseName: "created",
        type: "Date",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    modified: {
        baseName: "modified",
        type: "Date",
    },
    monitorDefinition: {
        baseName: "monitor_definition",
        type: "{ [key: string]: any; }",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    templateVariables: {
        baseName: "template_variables",
        type: "Array<MonitorUserTemplateTemplateVariablesItems>",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    version: {
        baseName: "version",
        type: "number",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorUserTemplateResponseAttributes.js.map