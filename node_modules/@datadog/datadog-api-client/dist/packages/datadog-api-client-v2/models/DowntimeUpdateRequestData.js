"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeUpdateRequestData = void 0;
/**
 * Object to update a downtime.
 */
class DowntimeUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeUpdateRequestData.attributeTypeMap;
    }
}
exports.DowntimeUpdateRequestData = DowntimeUpdateRequestData;
/**
 * @ignore
 */
DowntimeUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DowntimeUpdateRequestAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DowntimeResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeUpdateRequestData.js.map