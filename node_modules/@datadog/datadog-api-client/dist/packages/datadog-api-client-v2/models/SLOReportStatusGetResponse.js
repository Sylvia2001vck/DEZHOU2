"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOReportStatusGetResponse = void 0;
/**
 * The SLO report status response.
 */
class SLOReportStatusGetResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOReportStatusGetResponse.attributeTypeMap;
    }
}
exports.SLOReportStatusGetResponse = SLOReportStatusGetResponse;
/**
 * @ignore
 */
SLOReportStatusGetResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SLOReportStatusGetResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOReportStatusGetResponse.js.map