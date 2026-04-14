"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansListRequest = void 0;
/**
 * The request for a spans list.
 */
class SpansListRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansListRequest.attributeTypeMap;
    }
}
exports.SpansListRequest = SpansListRequest;
/**
 * @ignore
 */
SpansListRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SpansListRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansListRequest.js.map