"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationAttributes = void 0;
/**
 * RUM application attributes.
 */
class RUMApplicationAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationAttributes.attributeTypeMap;
    }
}
exports.RUMApplicationAttributes = RUMApplicationAttributes;
/**
 * @ignore
 */
RUMApplicationAttributes.attributeTypeMap = {
    apiKeyId: {
        baseName: "api_key_id",
        type: "number",
        format: "int32",
    },
    applicationId: {
        baseName: "application_id",
        type: "string",
        required: true,
    },
    clientToken: {
        baseName: "client_token",
        type: "string",
        required: true,
    },
    createdAt: {
        baseName: "created_at",
        type: "number",
        required: true,
        format: "int64",
    },
    createdByHandle: {
        baseName: "created_by_handle",
        type: "string",
        required: true,
    },
    hash: {
        baseName: "hash",
        type: "string",
    },
    isActive: {
        baseName: "is_active",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    orgId: {
        baseName: "org_id",
        type: "number",
        required: true,
        format: "int32",
    },
    productScales: {
        baseName: "product_scales",
        type: "RUMProductScales",
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    updatedAt: {
        baseName: "updated_at",
        type: "number",
        required: true,
        format: "int64",
    },
    updatedByHandle: {
        baseName: "updated_by_handle",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMApplicationAttributes.js.map