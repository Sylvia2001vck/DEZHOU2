"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationListAttributes = void 0;
/**
 * RUM application list attributes.
 */
class RUMApplicationListAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationListAttributes.attributeTypeMap;
    }
}
exports.RUMApplicationListAttributes = RUMApplicationListAttributes;
/**
 * @ignore
 */
RUMApplicationListAttributes.attributeTypeMap = {
    applicationId: {
        baseName: "application_id",
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
//# sourceMappingURL=RUMApplicationListAttributes.js.map