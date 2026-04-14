"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeCreateRequest = void 0;
/**
 * Request for creating a downtime.
 */
class DowntimeCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeCreateRequest.attributeTypeMap;
    }
}
exports.DowntimeCreateRequest = DowntimeCreateRequest;
/**
 * @ignore
 */
DowntimeCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DowntimeCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeCreateRequest.js.map