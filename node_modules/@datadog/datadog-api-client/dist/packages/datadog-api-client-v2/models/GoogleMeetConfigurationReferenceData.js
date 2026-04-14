"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleMeetConfigurationReferenceData = void 0;
/**
 * The Google Meet configuration relationship data object.
 */
class GoogleMeetConfigurationReferenceData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleMeetConfigurationReferenceData.attributeTypeMap;
    }
}
exports.GoogleMeetConfigurationReferenceData = GoogleMeetConfigurationReferenceData;
/**
 * @ignore
 */
GoogleMeetConfigurationReferenceData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleMeetConfigurationReferenceData.js.map