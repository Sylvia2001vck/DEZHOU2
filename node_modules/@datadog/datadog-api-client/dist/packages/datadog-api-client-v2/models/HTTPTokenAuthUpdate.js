"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPTokenAuthUpdate = void 0;
/**
 * The definition of `HTTPTokenAuthUpdate` object.
 */
class HTTPTokenAuthUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPTokenAuthUpdate.attributeTypeMap;
    }
}
exports.HTTPTokenAuthUpdate = HTTPTokenAuthUpdate;
/**
 * @ignore
 */
HTTPTokenAuthUpdate.attributeTypeMap = {
    body: {
        baseName: "body",
        type: "HTTPBody",
    },
    headers: {
        baseName: "headers",
        type: "Array<HTTPHeaderUpdate>",
    },
    tokens: {
        baseName: "tokens",
        type: "Array<HTTPTokenUpdate>",
    },
    type: {
        baseName: "type",
        type: "HTTPTokenAuthType",
        required: true,
    },
    urlParameters: {
        baseName: "url_parameters",
        type: "Array<UrlParamUpdate>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPTokenAuthUpdate.js.map