"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplate = void 0;
/**
 * A monitor user template object.
 */
class MonitorUserTemplate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplate.attributeTypeMap;
    }
}
exports.MonitorUserTemplate = MonitorUserTemplate;
/**
 * @ignore
 */
MonitorUserTemplate.attributeTypeMap = {
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
    versions: {
        baseName: "versions",
        type: "Array<SimpleMonitorUserTemplate>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorUserTemplate.js.map