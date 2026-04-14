"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansAggregateResponseMetadata = void 0;
/**
 * The metadata associated with a request.
 */
class SpansAggregateResponseMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansAggregateResponseMetadata.attributeTypeMap;
    }
}
exports.SpansAggregateResponseMetadata = SpansAggregateResponseMetadata;
/**
 * @ignore
 */
SpansAggregateResponseMetadata.attributeTypeMap = {
    elapsed: {
        baseName: "elapsed",
        type: "number",
        format: "int64",
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
//# sourceMappingURL=SpansAggregateResponseMetadata.js.map