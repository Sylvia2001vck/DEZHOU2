"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationUpdateRequest = void 0;
/**
 * The custom destination.
 */
class CustomDestinationUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationUpdateRequest.attributeTypeMap;
    }
}
exports.CustomDestinationUpdateRequest = CustomDestinationUpdateRequest;
/**
 * @ignore
 */
CustomDestinationUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomDestinationUpdateRequestDefinition",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationUpdateRequest.js.map