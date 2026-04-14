"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppRequestDataAttributes = void 0;
/**
 * App definition attributes to be updated, such as name, description, and components.
 */
class UpdateAppRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppRequestDataAttributes.attributeTypeMap;
    }
}
exports.UpdateAppRequestDataAttributes = UpdateAppRequestDataAttributes;
/**
 * @ignore
 */
UpdateAppRequestDataAttributes.attributeTypeMap = {
    components: {
        baseName: "components",
        type: "Array<ComponentGrid>",
    },
    description: {
        baseName: "description",
        type: "string",
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
//# sourceMappingURL=UpdateAppRequestDataAttributes.js.map