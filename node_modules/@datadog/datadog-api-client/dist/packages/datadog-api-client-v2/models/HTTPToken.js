"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPToken = void 0;
/**
 * The definition of `HTTPToken` object.
 */
class HTTPToken {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPToken.attributeTypeMap;
    }
}
exports.HTTPToken = HTTPToken;
/**
 * @ignore
 */
HTTPToken.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TokenType",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPToken.js.map