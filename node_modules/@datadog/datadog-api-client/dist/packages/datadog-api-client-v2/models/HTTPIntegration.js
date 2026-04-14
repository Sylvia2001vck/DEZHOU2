"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPIntegration = void 0;
/**
 * The definition of `HTTPIntegration` object.
 */
class HTTPIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPIntegration.attributeTypeMap;
    }
}
exports.HTTPIntegration = HTTPIntegration;
/**
 * @ignore
 */
HTTPIntegration.attributeTypeMap = {
    baseUrl: {
        baseName: "base_url",
        type: "string",
        required: true,
    },
    credentials: {
        baseName: "credentials",
        type: "HTTPCredentials",
        required: true,
    },
    type: {
        baseName: "type",
        type: "HTTPIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPIntegration.js.map