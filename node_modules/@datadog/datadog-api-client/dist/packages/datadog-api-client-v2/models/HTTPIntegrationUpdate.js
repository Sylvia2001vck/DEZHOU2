"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPIntegrationUpdate = void 0;
/**
 * The definition of `HTTPIntegrationUpdate` object.
 */
class HTTPIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPIntegrationUpdate.attributeTypeMap;
    }
}
exports.HTTPIntegrationUpdate = HTTPIntegrationUpdate;
/**
 * @ignore
 */
HTTPIntegrationUpdate.attributeTypeMap = {
    baseUrl: {
        baseName: "base_url",
        type: "string",
    },
    credentials: {
        baseName: "credentials",
        type: "HTTPCredentialsUpdate",
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
//# sourceMappingURL=HTTPIntegrationUpdate.js.map