"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleMeetConfigurationReference = void 0;
/**
 * A reference to a Google Meet Configuration resource.
 */
class GoogleMeetConfigurationReference {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GoogleMeetConfigurationReference.attributeTypeMap;
    }
}
exports.GoogleMeetConfigurationReference = GoogleMeetConfigurationReference;
/**
 * @ignore
 */
GoogleMeetConfigurationReference.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GoogleMeetConfigurationReferenceData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GoogleMeetConfigurationReference.js.map