"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationUpdateRequest = void 0;
/**
 * RUM application update request.
 */
class RUMApplicationUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationUpdateRequest.attributeTypeMap;
    }
}
exports.RUMApplicationUpdateRequest = RUMApplicationUpdateRequest;
/**
 * @ignore
 */
RUMApplicationUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RUMApplicationUpdate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMApplicationUpdateRequest.js.map