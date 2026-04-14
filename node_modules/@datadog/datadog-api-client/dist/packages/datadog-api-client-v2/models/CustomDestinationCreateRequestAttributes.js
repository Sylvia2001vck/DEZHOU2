"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationCreateRequestAttributes = void 0;
/**
 * The attributes associated with the custom destination.
 */
class CustomDestinationCreateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationCreateRequestAttributes.attributeTypeMap;
    }
}
exports.CustomDestinationCreateRequestAttributes = CustomDestinationCreateRequestAttributes;
/**
 * @ignore
 */
CustomDestinationCreateRequestAttributes.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    forwardTags: {
        baseName: "forward_tags",
        type: "boolean",
    },
    forwardTagsRestrictionList: {
        baseName: "forward_tags_restriction_list",
        type: "Array<string>",
    },
    forwardTagsRestrictionListType: {
        baseName: "forward_tags_restriction_list_type",
        type: "CustomDestinationAttributeTagsRestrictionListType",
    },
    forwarderDestination: {
        baseName: "forwarder_destination",
        type: "CustomDestinationForwardDestination",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationCreateRequestAttributes.js.map