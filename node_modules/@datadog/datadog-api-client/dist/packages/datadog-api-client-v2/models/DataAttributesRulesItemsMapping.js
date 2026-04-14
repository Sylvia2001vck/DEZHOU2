"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAttributesRulesItemsMapping = void 0;
/**
 * The definition of `DataAttributesRulesItemsMapping` object.
 */
class DataAttributesRulesItemsMapping {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DataAttributesRulesItemsMapping.attributeTypeMap;
    }
}
exports.DataAttributesRulesItemsMapping = DataAttributesRulesItemsMapping;
/**
 * @ignore
 */
DataAttributesRulesItemsMapping.attributeTypeMap = {
    destinationKey: {
        baseName: "destination_key",
        type: "string",
        required: true,
    },
    ifNotExists: {
        baseName: "if_not_exists",
        type: "boolean",
    },
    ifTagExists: {
        baseName: "if_tag_exists",
        type: "DataAttributesRulesItemsIfTagExists",
    },
    sourceKeys: {
        baseName: "source_keys",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DataAttributesRulesItemsMapping.js.map