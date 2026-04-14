"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationsResponse = void 0;
/**
 * The available custom destinations.
 */
class CustomDestinationsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationsResponse.attributeTypeMap;
    }
}
exports.CustomDestinationsResponse = CustomDestinationsResponse;
/**
 * @ignore
 */
CustomDestinationsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CustomDestinationResponseDefinition>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationsResponse.js.map