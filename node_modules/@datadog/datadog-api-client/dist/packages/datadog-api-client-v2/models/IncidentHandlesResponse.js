"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandlesResponse = void 0;
class IncidentHandlesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandlesResponse.attributeTypeMap;
    }
}
exports.IncidentHandlesResponse = IncidentHandlesResponse;
/**
 * @ignore
 */
IncidentHandlesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IncidentHandleDataResponse>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentHandleIncludedItemResponse>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentHandlesResponse.js.map