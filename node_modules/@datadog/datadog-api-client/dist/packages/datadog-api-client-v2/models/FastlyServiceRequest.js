"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyServiceRequest = void 0;
/**
 * Payload schema for Fastly service requests.
 */
class FastlyServiceRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyServiceRequest.attributeTypeMap;
    }
}
exports.FastlyServiceRequest = FastlyServiceRequest;
/**
 * @ignore
 */
FastlyServiceRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FastlyServiceData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyServiceRequest.js.map