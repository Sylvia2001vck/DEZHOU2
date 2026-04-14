"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPowerpacksResponse = void 0;
/**
 * Response object which includes all powerpack configurations.
 */
class ListPowerpacksResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListPowerpacksResponse.attributeTypeMap;
    }
}
exports.ListPowerpacksResponse = ListPowerpacksResponse;
/**
 * @ignore
 */
ListPowerpacksResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<PowerpackData>",
    },
    included: {
        baseName: "included",
        type: "Array<User>",
    },
    links: {
        baseName: "links",
        type: "PowerpackResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "PowerpacksResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListPowerpacksResponse.js.map