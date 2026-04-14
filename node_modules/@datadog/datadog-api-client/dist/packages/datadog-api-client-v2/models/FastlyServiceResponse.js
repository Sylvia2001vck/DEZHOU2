"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyServiceResponse = void 0;
/**
 * The expected response schema when getting a Fastly service.
 */
class FastlyServiceResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyServiceResponse.attributeTypeMap;
    }
}
exports.FastlyServiceResponse = FastlyServiceResponse;
/**
 * @ignore
 */
FastlyServiceResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FastlyServiceData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyServiceResponse.js.map