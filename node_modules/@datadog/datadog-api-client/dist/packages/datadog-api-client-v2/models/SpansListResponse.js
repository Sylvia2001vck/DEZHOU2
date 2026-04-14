"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansListResponse = void 0;
/**
 * Response object with all spans matching the request and pagination information.
 */
class SpansListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansListResponse.attributeTypeMap;
    }
}
exports.SpansListResponse = SpansListResponse;
/**
 * @ignore
 */
SpansListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Span>",
    },
    links: {
        baseName: "links",
        type: "SpansListResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "SpansListResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansListResponse.js.map