"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2EventResponse = void 0;
/**
 * Get an event response.
 */
class V2EventResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return V2EventResponse.attributeTypeMap;
    }
}
exports.V2EventResponse = V2EventResponse;
/**
 * @ignore
 */
V2EventResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "V2Event",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=V2EventResponse.js.map