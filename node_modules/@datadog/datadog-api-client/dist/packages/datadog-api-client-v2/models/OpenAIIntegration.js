"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIIntegration = void 0;
/**
 * The definition of the `OpenAIIntegration` object.
 */
class OpenAIIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpenAIIntegration.attributeTypeMap;
    }
}
exports.OpenAIIntegration = OpenAIIntegration;
/**
 * @ignore
 */
OpenAIIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "OpenAICredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "OpenAIIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OpenAIIntegration.js.map