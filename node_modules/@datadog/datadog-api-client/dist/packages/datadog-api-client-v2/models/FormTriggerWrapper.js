"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormTriggerWrapper = void 0;
/**
 * Schema for a Form-based trigger.
 */
class FormTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormTriggerWrapper.attributeTypeMap;
    }
}
exports.FormTriggerWrapper = FormTriggerWrapper;
/**
 * @ignore
 */
FormTriggerWrapper.attributeTypeMap = {
    formTrigger: {
        baseName: "formTrigger",
        type: "FormTrigger",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormTriggerWrapper.js.map