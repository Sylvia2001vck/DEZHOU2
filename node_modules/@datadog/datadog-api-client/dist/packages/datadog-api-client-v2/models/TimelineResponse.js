"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineResponse = void 0;
/**
 * Timeline response
 */
class TimelineResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimelineResponse.attributeTypeMap;
    }
}
exports.TimelineResponse = TimelineResponse;
/**
 * @ignore
 */
TimelineResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TimelineCellResource>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimelineResponse.js.map