"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansListResponseMetadata = void 0;
/**
 * The metadata associated with a request.
 */
class SpansListResponseMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansListResponseMetadata.attributeTypeMap;
    }
}
exports.SpansListResponseMetadata = SpansListResponseMetadata;
/**
 * @ignore
 */
SpansListResponseMetadata.attributeTypeMap = {
    elapsed: {
        baseName: "elapsed",
        type: "number",
        format: "int64",
    },
    page: {
        baseName: "page",
        type: "SpansResponseMetadataPage",
    },
    requestId: {
        baseName: "request_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "SpansAggregateResponseStatus",
    },
    warnings: {
        baseName: "warnings",
        type: "Array<SpansWarning>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansListResponseMetadata.js.map