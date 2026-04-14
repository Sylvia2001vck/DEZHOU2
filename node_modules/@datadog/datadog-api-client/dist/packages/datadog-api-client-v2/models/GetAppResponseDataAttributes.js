"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAppResponseDataAttributes = void 0;
/**
 * The app definition attributes, such as name, description, and components.
 */
class GetAppResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetAppResponseDataAttributes.attributeTypeMap;
    }
}
exports.GetAppResponseDataAttributes = GetAppResponseDataAttributes;
/**
 * @ignore
 */
GetAppResponseDataAttributes.attributeTypeMap = {
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
//# sourceMappingURL=GetAppResponseDataAttributes.js.map