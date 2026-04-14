"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaRequestDataAttributesDependenciesItems = void 0;
class ScaRequestDataAttributesDependenciesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScaRequestDataAttributesDependenciesItems.attributeTypeMap;
    }
}
exports.ScaRequestDataAttributesDependenciesItems = ScaRequestDataAttributesDependenciesItems;
/**
 * @ignore
 */
ScaRequestDataAttributesDependenciesItems.attributeTypeMap = {
    exclusions: {
        baseName: "exclusions",
        type: "Array<string>",
    },
    group: {
        baseName: "group",
        type: "string",
    },
    isDev: {
        baseName: "is_dev",
        type: "boolean",
    },
    isDirect: {
        baseName: "is_direct",
        type: "boolean",
    },
    language: {
        baseName: "language",
        type: "string",
    },
    locations: {
        baseName: "locations",
        type: "Array<ScaRequestDataAttributesDependenciesItemsLocationsItems>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    packageManager: {
        baseName: "package_manager",
        type: "string",
    },
    purl: {
        baseName: "purl",
        type: "string",
    },
    reachableSymbolProperties: {
        baseName: "reachable_symbol_properties",
        type: "Array<ScaRequestDataAttributesDependenciesItemsReachableSymbolPropertiesItems>",
    },
    version: {
        baseName: "version",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScaRequestDataAttributesDependenciesItems.js.map