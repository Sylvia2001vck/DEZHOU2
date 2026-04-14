"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOReportPostResponseData = void 0;
/**
 * The data portion of the SLO report response.
 */
class SLOReportPostResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOReportPostResponseData.attributeTypeMap;
    }
}
exports.SLOReportPostResponseData = SLOReportPostResponseData;
/**
 * @ignore
 */
SLOReportPostResponseData.attributeTypeMap = {
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
//# sourceMappingURL=SLOReportPostResponseData.js.map