"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOReportStatusGetResponseData = void 0;
/**
 * The data portion of the SLO report status response.
 */
class SLOReportStatusGetResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOReportStatusGetResponseData.attributeTypeMap;
    }
}
exports.SLOReportStatusGetResponseData = SLOReportStatusGetResponseData;
/**
 * @ignore
 */
SLOReportStatusGetResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SLOReportStatusGetResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOReportStatusGetResponseData.js.map