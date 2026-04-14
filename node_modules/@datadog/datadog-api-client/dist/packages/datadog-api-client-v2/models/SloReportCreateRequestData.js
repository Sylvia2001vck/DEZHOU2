"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SloReportCreateRequestData = void 0;
/**
 * The data portion of the SLO report request.
 */
class SloReportCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SloReportCreateRequestData.attributeTypeMap;
    }
}
exports.SloReportCreateRequestData = SloReportCreateRequestData;
/**
 * @ignore
 */
SloReportCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SloReportCreateRequestAttributes",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SloReportCreateRequestData.js.map