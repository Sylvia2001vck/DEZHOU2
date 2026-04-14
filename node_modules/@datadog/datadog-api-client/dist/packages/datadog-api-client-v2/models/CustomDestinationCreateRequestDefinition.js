"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationCreateRequestDefinition = void 0;
/**
 * The definition of a custom destination.
 */
class CustomDestinationCreateRequestDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationCreateRequestDefinition.attributeTypeMap;
    }
}
exports.CustomDestinationCreateRequestDefinition = CustomDestinationCreateRequestDefinition;
/**
 * @ignore
 */
CustomDestinationCreateRequestDefinition.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomDestinationCreateRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationCreateRequestDefinition.js.map