"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationUpdateRequestAttributes = void 0;
/**
 * The attributes associated with the custom destination.
 */
class CustomDestinationUpdateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationUpdateRequestAttributes.attributeTypeMap;
    }
}
exports.CustomDestinationUpdateRequestAttributes = CustomDestinationUpdateRequestAttributes;
/**
 * @ignore
 */
CustomDestinationUpdateRequestAttributes.attributeTypeMap = {
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
//# sourceMappingURL=CustomDestinationUpdateRequestAttributes.js.map