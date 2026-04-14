"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppKeyRegistrationsResponse = void 0;
/**
 * A paginated list of app key registrations.
 */
class ListAppKeyRegistrationsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAppKeyRegistrationsResponse.attributeTypeMap;
    }
}
exports.ListAppKeyRegistrationsResponse = ListAppKeyRegistrationsResponse;
/**
 * @ignore
 */
ListAppKeyRegistrationsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AppKeyRegistrationData>",
    },
    meta: {
        baseName: "meta",
        type: "ListAppKeyRegistrationsResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAppKeyRegistrationsResponse.js.map