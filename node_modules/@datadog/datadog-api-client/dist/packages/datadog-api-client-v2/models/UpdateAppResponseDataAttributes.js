"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppResponseDataAttributes = void 0;
/**
 * The updated app definition attributes, such as name, description, and components.
 */
class UpdateAppResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppResponseDataAttributes.attributeTypeMap;
    }
}
exports.UpdateAppResponseDataAttributes = UpdateAppResponseDataAttributes;
/**
 * @ignore
 */
UpdateAppResponseDataAttributes.attributeTypeMap = {
    components: {
        baseName: "components",
        type: "Array<ComponentGrid>",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    favorite: {
        baseName: "favorite",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    queries: {
        baseName: "queries",
        type: "Array<Query>",
    },
    rootInstanceName: {
        baseName: "rootInstanceName",
        type: "string",
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
//# sourceMappingURL=UpdateAppResponseDataAttributes.js.map