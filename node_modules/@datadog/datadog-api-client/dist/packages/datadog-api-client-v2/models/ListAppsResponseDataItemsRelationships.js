"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppsResponseDataItemsRelationships = void 0;
/**
 * The app's publication information.
 */
class ListAppsResponseDataItemsRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAppsResponseDataItemsRelationships.attributeTypeMap;
    }
}
exports.ListAppsResponseDataItemsRelationships = ListAppsResponseDataItemsRelationships;
/**
 * @ignore
 */
ListAppsResponseDataItemsRelationships.attributeTypeMap = {
    deployment: {
        baseName: "deployment",
        type: "DeploymentRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAppsResponseDataItemsRelationships.js.map