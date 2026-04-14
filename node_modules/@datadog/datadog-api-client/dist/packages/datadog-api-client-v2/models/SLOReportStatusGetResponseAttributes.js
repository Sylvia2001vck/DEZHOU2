"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOReportStatusGetResponseAttributes = void 0;
/**
 * The attributes portion of the SLO report status response.
 */
class SLOReportStatusGetResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOReportStatusGetResponseAttributes.attributeTypeMap;
    }
}
exports.SLOReportStatusGetResponseAttributes = SLOReportStatusGetResponseAttributes;
/**
 * @ignore
 */
SLOReportStatusGetResponseAttributes.attributeTypeMap = {
    status: {
        baseName: "status",
        type: "SLOReportStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOReportStatusGetResponseAttributes.js.map