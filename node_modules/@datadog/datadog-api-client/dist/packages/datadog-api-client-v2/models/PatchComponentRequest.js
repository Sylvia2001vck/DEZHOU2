"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchComponentRequest = void 0;
class PatchComponentRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchComponentRequest.attributeTypeMap;
    }
}
exports.PatchComponentRequest = PatchComponentRequest;
/**
 * @ignore
 */
PatchComponentRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PatchComponentRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchComponentRequest.js.map