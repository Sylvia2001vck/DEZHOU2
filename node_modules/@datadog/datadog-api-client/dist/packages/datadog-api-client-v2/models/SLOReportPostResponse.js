"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOReportPostResponse = void 0;
/**
 * The SLO report response.
 */
class SLOReportPostResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOReportPostResponse.attributeTypeMap;
    }
}
exports.SLOReportPostResponse = SLOReportPostResponse;
/**
 * @ignore
 */
SLOReportPostResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SLOReportPostResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOReportPostResponse.js.map