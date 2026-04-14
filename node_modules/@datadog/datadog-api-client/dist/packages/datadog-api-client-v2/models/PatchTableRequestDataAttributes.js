"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTableRequestDataAttributes = void 0;
/**
 * Attributes that define the updates to the reference table's configuration and properties.
 */
class PatchTableRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchTableRequestDataAttributes.attributeTypeMap;
    }
}
exports.PatchTableRequestDataAttributes = PatchTableRequestDataAttributes;
/**
 * @ignore
 */
PatchTableRequestDataAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    fileMetadata: {
        baseName: "file_metadata",
        type: "PatchTableRequestDataAttributesFileMetadata",
    },
    schema: {
        baseName: "schema",
        type: "PatchTableRequestDataAttributesSchema",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchTableRequestDataAttributes.js.map