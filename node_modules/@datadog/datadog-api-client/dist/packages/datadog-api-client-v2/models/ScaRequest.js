"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaRequest = void 0;
class ScaRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScaRequest.attributeTypeMap;
    }
}
exports.ScaRequest = ScaRequest;
/**
 * @ignore
 */
ScaRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ScaRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScaRequest.js.map