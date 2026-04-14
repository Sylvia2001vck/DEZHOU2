"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateRequest = void 0;
/**
 * The top-level request body for schedule creation, wrapping a `data` object.
 */
class ScheduleCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleCreateRequest.attributeTypeMap;
    }
}
exports.ScheduleCreateRequest = ScheduleCreateRequest;
/**
 * @ignore
 */
ScheduleCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ScheduleCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleCreateRequest.js.map