"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationCreateRequest = void 0;
/**
 * RUM application creation request attributes.
 */
class RUMApplicationCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationCreateRequest.attributeTypeMap;
    }
}
exports.RUMApplicationCreateRequest = RUMApplicationCreateRequest;
/**
 * @ignore
 */
RUMApplicationCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RUMApplicationCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMApplicationCreateRequest.js.map