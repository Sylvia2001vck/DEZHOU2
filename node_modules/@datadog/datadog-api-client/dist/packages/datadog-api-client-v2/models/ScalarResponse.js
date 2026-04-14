"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarResponse = void 0;
/**
 * A message containing the response to a scalar query.
 */
class ScalarResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScalarResponse.attributeTypeMap;
    }
}
exports.ScalarResponse = ScalarResponse;
/**
 * @ignore
 */
ScalarResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ScalarFormulaResponseAtrributes",
    },
    type: {
        baseName: "type",
        type: "ScalarFormulaResponseType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScalarResponse.js.map