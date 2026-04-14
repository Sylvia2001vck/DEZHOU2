"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3Metadata = void 0;
/**
 * The definition of Entity V3 Metadata object.
 */
class EntityV3Metadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3Metadata.attributeTypeMap;
    }
}
exports.EntityV3Metadata = EntityV3Metadata;
/**
 * @ignore
 */
EntityV3Metadata.attributeTypeMap = {
    additionalOwners: {
        baseName: "additionalOwners",
        type: "Array<EntityV3MetadataAdditionalOwnersItems>",
    },
    contacts: {
        baseName: "contacts",
        type: "Array<EntityV3MetadataContactsItems>",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    displayName: {
        baseName: "displayName",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    inheritFrom: {
        baseName: "inheritFrom",
        type: "string",
    },
    links: {
        baseName: "links",
        type: "Array<EntityV3MetadataLinksItems>",
    },
    managed: {
        baseName: "managed",
        type: "{ [key: string]: any; }",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    namespace: {
        baseName: "namespace",
        type: "string",
    },
    owner: {
        baseName: "owner",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
};
//# sourceMappingURL=EntityV3Metadata.js.map