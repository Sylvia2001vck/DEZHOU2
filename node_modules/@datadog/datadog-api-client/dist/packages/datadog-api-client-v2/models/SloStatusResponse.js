"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SloStatusResponse = void 0;
/**
 * The SLO status response.
 */
class SloStatusResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SloStatusResponse.attributeTypeMap;
    }
}
exports.SloStatusResponse = SloStatusResponse;
/**
 * @ignore
 */
SloStatusResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SloStatusData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SloStatusResponse.js.map