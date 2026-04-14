"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUserTemplateRequestAttributes = void 0;
/**
 * Attributes for a monitor user template.
 */
class MonitorUserTemplateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUserTemplateRequestAttributes.attributeTypeMap;
    }
}
exports.MonitorUserTemplateRequestAttributes = MonitorUserTemplateRequestAttributes;
/**
 * @ignore
 */
MonitorUserTemplateRequestAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    monitorDefinition: {
        baseName: "monitor_definition",
        type: "{ [key: string]: any; }",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
        required: true,
    },
    templateVariables: {
        baseName: "template_variables",
        type: "Array<MonitorUserTemplateTemplateVariablesItems>",
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
};
//# sourceMappingURL=MonitorUserTemplateRequestAttributes.js.map