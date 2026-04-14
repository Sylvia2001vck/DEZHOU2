"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SloReportCreateRequest = void 0;
/**
 * The SLO report request body.
 */
class SloReportCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SloReportCreateRequest.attributeTypeMap;
    }
}
exports.SloReportCreateRequest = SloReportCreateRequest;
/**
 * @ignore
 */
SloReportCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SloReportCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SloReportCreateRequest.js.map