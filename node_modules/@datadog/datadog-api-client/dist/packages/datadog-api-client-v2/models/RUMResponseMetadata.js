"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMResponseMetadata = void 0;
/**
 * The metadata associated with a request.
 */
class RUMResponseMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMResponseMetadata.attributeTypeMap;
    }
}
exports.RUMResponseMetadata = RUMResponseMetadata;
/**
 * @ignore
 */
RUMResponseMetadata.attributeTypeMap = {
    elapsed: {
        baseName: "elapsed",
        type: "number",
        format: "int64",
    },
    page: {
        baseName: "page",
        type: "RUMResponsePage",
    },
    requestId: {
        baseName: "request_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "RUMResponseStatus",
    },
    warnings: {
        baseName: "warnings",
        type: "Array<RUMWarning>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMResponseMetadata.js.map