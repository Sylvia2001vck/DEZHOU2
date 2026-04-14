"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationsResponse = void 0;
/**
 * RUM applications response.
 */
class RUMApplicationsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationsResponse.attributeTypeMap;
    }
}
exports.RUMApplicationsResponse = RUMApplicationsResponse;
/**
 * @ignore
 */
RUMApplicationsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RUMApplicationList>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMApplicationsResponse.js.map