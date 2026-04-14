"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretRuleDataAttributesMatchValidation = void 0;
class SecretRuleDataAttributesMatchValidation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecretRuleDataAttributesMatchValidation.attributeTypeMap;
    }
}
exports.SecretRuleDataAttributesMatchValidation = SecretRuleDataAttributesMatchValidation;
/**
 * @ignore
 */
SecretRuleDataAttributesMatchValidation.attributeTypeMap = {
    endpoint: {
        baseName: "endpoint",
        type: "string",
    },
    hosts: {
        baseName: "hosts",
        type: "Array<string>",
    },
    httpMethod: {
        baseName: "http_method",
        type: "string",
    },
    invalidHttpStatusCode: {
        baseName: "invalid_http_status_code",
        type: "Array<SecretRuleDataAttributesMatchValidationInvalidHttpStatusCodeItems>",
    },
    requestHeaders: {
        baseName: "request_headers",
        type: "{ [key: string]: string; }",
    },
    timeoutSeconds: {
        baseName: "timeout_seconds",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    validHttpStatusCode: {
        baseName: "valid_http_status_code",
        type: "Array<SecretRuleDataAttributesMatchValidationValidHttpStatusCodeItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecretRuleDataAttributesMatchValidation.js.map