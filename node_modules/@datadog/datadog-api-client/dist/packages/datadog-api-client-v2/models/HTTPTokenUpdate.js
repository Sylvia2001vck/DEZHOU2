"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPTokenUpdate = void 0;
/**
 * The definition of `HTTPTokenUpdate` object.
 */
class HTTPTokenUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPTokenUpdate.attributeTypeMap;
    }
}
exports.HTTPTokenUpdate = HTTPTokenUpdate;
/**
 * @ignore
 */
HTTPTokenUpdate.attributeTypeMap = {
    deleted: {
        baseName: "deleted",
        type: "boolean",
    },
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
//# sourceMappingURL=HTTPTokenUpdate.js.map