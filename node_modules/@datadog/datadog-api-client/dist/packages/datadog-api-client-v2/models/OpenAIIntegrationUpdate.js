"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIIntegrationUpdate = void 0;
/**
 * The definition of the `OpenAIIntegrationUpdate` object.
 */
class OpenAIIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OpenAIIntegrationUpdate.attributeTypeMap;
    }
}
exports.OpenAIIntegrationUpdate = OpenAIIntegrationUpdate;
/**
 * @ignore
 */
OpenAIIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "OpenAICredentialsUpdate",
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
//# sourceMappingURL=OpenAIIntegrationUpdate.js.map