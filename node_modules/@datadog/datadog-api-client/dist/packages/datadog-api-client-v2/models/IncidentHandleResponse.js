"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandleResponse = void 0;
class IncidentHandleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandleResponse.attributeTypeMap;
    }
}
exports.IncidentHandleResponse = IncidentHandleResponse;
/**
 * @ignore
 */
IncidentHandleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentHandleDataResponse",
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
//# sourceMappingURL=IncidentHandleResponse.js.map