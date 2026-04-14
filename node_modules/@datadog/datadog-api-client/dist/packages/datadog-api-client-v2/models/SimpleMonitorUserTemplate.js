"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleMonitorUserTemplate = void 0;
/**
 * A simplified version of a monitor user template.
 */
class SimpleMonitorUserTemplate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SimpleMonitorUserTemplate.attributeTypeMap;
    }
}
exports.SimpleMonitorUserTemplate = SimpleMonitorUserTemplate;
/**
 * @ignore
 */
SimpleMonitorUserTemplate.attributeTypeMap = {
    created: {
        baseName: "created",
        type: "Date",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=SimpleMonitorUserTemplate.js.map