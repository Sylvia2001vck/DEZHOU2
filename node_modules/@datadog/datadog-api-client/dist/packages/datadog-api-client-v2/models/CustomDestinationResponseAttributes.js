"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationResponseAttributes = void 0;
/**
 * The attributes associated with the custom destination.
 */
class CustomDestinationResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationResponseAttributes.attributeTypeMap;
    }
}
exports.CustomDestinationResponseAttributes = CustomDestinationResponseAttributes;
/**
 * @ignore
 */
CustomDestinationResponseAttributes.attributeTypeMap = {
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
        type: "CustomDestinationResponseForwardDestination",
    },
    name: {
        baseName: "name",
        type: "string",
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
//# sourceMappingURL=CustomDestinationResponseAttributes.js.map