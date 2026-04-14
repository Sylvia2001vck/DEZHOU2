"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreatHuntingJobListMeta = void 0;
/**
 * Metadata about the list of jobs.
 */
class ThreatHuntingJobListMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ThreatHuntingJobListMeta.attributeTypeMap;
    }
}
exports.ThreatHuntingJobListMeta = ThreatHuntingJobListMeta;
/**
 * @ignore
 */
ThreatHuntingJobListMeta.attributeTypeMap = {
    totalCount: {
        baseName: "totalCount",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ThreatHuntingJobListMeta.js.map