"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListIntegrationsResponse = void 0;
/**
 * Response containing information about multiple integrations.
 */
class ListIntegrationsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListIntegrationsResponse.attributeTypeMap;
    }
}
exports.ListIntegrationsResponse = ListIntegrationsResponse;
/**
 * @ignore
 */
ListIntegrationsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Integration>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListIntegrationsResponse.js.map