"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchStatusPageRequestDataAttributes = void 0;
/**
 * The supported attributes for updating a status page.
 */
class PatchStatusPageRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchStatusPageRequestDataAttributes.attributeTypeMap;
    }
}
exports.PatchStatusPageRequestDataAttributes = PatchStatusPageRequestDataAttributes;
/**
 * @ignore
 */
PatchStatusPageRequestDataAttributes.attributeTypeMap = {
    companyLogo: {
        baseName: "company_logo",
        type: "string",
    },
    domainPrefix: {
        baseName: "domain_prefix",
        type: "string",
    },
    emailHeaderImage: {
        baseName: "email_header_image",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    favicon: {
        baseName: "favicon",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    subscriptionsEnabled: {
        baseName: "subscriptions_enabled",
        type: "boolean",
    },
    type: {
        baseName: "type",
        type: "CreateStatusPageRequestDataAttributesType",
    },
    visualizationType: {
        baseName: "visualization_type",
        type: "CreateStatusPageRequestDataAttributesVisualizationType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchStatusPageRequestDataAttributes.js.map