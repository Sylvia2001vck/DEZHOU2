"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SloReportCreateRequestAttributes = void 0;
/**
 * The attributes portion of the SLO report request.
 */
class SloReportCreateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SloReportCreateRequestAttributes.attributeTypeMap;
    }
}
exports.SloReportCreateRequestAttributes = SloReportCreateRequestAttributes;
/**
 * @ignore
 */
SloReportCreateRequestAttributes.attributeTypeMap = {
    fromTs: {
        baseName: "from_ts",
        type: "number",
        required: true,
        format: "int64",
    },
    interval: {
        baseName: "interval",
        type: "SLOReportInterval",
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    toTs: {
        baseName: "to_ts",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SloReportCreateRequestAttributes.js.map