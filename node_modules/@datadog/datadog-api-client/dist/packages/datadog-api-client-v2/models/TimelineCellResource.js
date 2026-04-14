"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCellResource = void 0;
/**
 * Timeline cell JSON:API resource
 */
class TimelineCellResource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimelineCellResource.attributeTypeMap;
    }
}
exports.TimelineCellResource = TimelineCellResource;
/**
 * @ignore
 */
TimelineCellResource.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TimelineCell",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TimelineCellResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimelineCellResource.js.map