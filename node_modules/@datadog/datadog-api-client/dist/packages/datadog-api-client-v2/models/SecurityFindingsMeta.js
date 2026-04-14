"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFindingsMeta = void 0;
/**
 * Metadata about the response.
 */
class SecurityFindingsMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFindingsMeta.attributeTypeMap;
    }
}
exports.SecurityFindingsMeta = SecurityFindingsMeta;
/**
 * @ignore
 */
SecurityFindingsMeta.attributeTypeMap = {
    elapsed: {
        baseName: "elapsed",
        type: "number",
        format: "int64",
    },
    page: {
        baseName: "page",
        type: "SecurityFindingsPage",
    },
    requestId: {
        baseName: "request_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "SecurityFindingsStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFindingsMeta.js.map