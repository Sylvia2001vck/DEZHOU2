"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPLogErrors = void 0;
/**
 * Invalid query performed.
 */
class HTTPLogErrors {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPLogErrors.attributeTypeMap;
    }
}
exports.HTTPLogErrors = HTTPLogErrors;
/**
 * @ignore
 */
HTTPLogErrors.attributeTypeMap = {
    errors: {
        baseName: "errors",
        type: "Array<HTTPLogError>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPLogErrors.js.map