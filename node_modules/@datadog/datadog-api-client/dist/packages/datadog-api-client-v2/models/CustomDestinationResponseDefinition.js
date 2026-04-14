"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationResponseDefinition = void 0;
/**
 * The definition of a custom destination.
 */
class CustomDestinationResponseDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationResponseDefinition.attributeTypeMap;
    }
}
exports.CustomDestinationResponseDefinition = CustomDestinationResponseDefinition;
/**
 * @ignore
 */
CustomDestinationResponseDefinition.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomDestinationResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CustomDestinationType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationResponseDefinition.js.map