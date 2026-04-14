"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeUpdateRequest = void 0;
/**
 * Request for editing a downtime.
 */
class DowntimeUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeUpdateRequest.attributeTypeMap;
    }
}
exports.DowntimeUpdateRequest = DowntimeUpdateRequest;
/**
 * @ignore
 */
DowntimeUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DowntimeUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeUpdateRequest.js.map