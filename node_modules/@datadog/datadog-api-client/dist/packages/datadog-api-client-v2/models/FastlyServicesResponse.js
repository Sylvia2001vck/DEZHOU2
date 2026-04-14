"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyServicesResponse = void 0;
/**
 * The expected response schema when getting Fastly services.
 */
class FastlyServicesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyServicesResponse.attributeTypeMap;
    }
}
exports.FastlyServicesResponse = FastlyServicesResponse;
/**
 * @ignore
 */
FastlyServicesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<FastlyServiceData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyServicesResponse.js.map