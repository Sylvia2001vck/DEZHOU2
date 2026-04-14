"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPTokenAuth = void 0;
/**
 * The definition of `HTTPTokenAuth` object.
 */
class HTTPTokenAuth {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPTokenAuth.attributeTypeMap;
    }
}
exports.HTTPTokenAuth = HTTPTokenAuth;
/**
 * @ignore
 */
HTTPTokenAuth.attributeTypeMap = {
    body: {
        baseName: "body",
        type: "HTTPBody",
    },
    headers: {
        baseName: "headers",
        type: "Array<HTTPHeader>",
    },
    tokens: {
        baseName: "tokens",
        type: "Array<HTTPToken>",
    },
    type: {
        baseName: "type",
        type: "HTTPTokenAuthType",
        required: true,
    },
    urlParameters: {
        baseName: "url_parameters",
        type: "Array<UrlParam>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPTokenAuth.js.map