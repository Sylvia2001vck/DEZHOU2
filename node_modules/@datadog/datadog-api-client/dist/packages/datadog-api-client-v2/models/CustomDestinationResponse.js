"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationResponse = void 0;
/**
 * The custom destination.
 */
class CustomDestinationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationResponse.attributeTypeMap;
    }
}
exports.CustomDestinationResponse = CustomDestinationResponse;
/**
 * @ignore
 */
CustomDestinationResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomDestinationResponseDefinition",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationResponse.js.map