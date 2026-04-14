"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationCreateRequest = void 0;
/**
 * The custom destination.
 */
class CustomDestinationCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationCreateRequest.attributeTypeMap;
    }
}
exports.CustomDestinationCreateRequest = CustomDestinationCreateRequest;
/**
 * @ignore
 */
CustomDestinationCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomDestinationCreateRequestDefinition",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationCreateRequest.js.map