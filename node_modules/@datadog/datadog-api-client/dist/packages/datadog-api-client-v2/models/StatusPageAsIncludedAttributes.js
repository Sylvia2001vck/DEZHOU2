"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPageAsIncludedAttributes = void 0;
/**
 * The attributes of a status page.
 */
class StatusPageAsIncludedAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPageAsIncludedAttributes.attributeTypeMap;
    }
}
exports.StatusPageAsIncludedAttributes = StatusPageAsIncludedAttributes;
/**
 * @ignore
 */
StatusPageAsIncludedAttributes.attributeTypeMap = {
    companyLogo: {
        baseName: "company_logo",
        type: "string",
    },
    components: {
        baseName: "components",
        type: "Array<StatusPageAsIncludedAttributesComponentsItems>",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    customDomain: {
        baseName: "custom_domain",
        type: "string",
    },
    customDomainEnabled: {
        baseName: "custom_domain_enabled",
        type: "boolean",
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
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    pageUrl: {
        baseName: "page_url",
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
//# sourceMappingURL=StatusPageAsIncludedAttributes.js.map