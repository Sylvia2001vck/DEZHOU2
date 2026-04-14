"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaRequestDataAttributesVulnerabilitiesItems = void 0;
class ScaRequestDataAttributesVulnerabilitiesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScaRequestDataAttributesVulnerabilitiesItems.attributeTypeMap;
    }
}
exports.ScaRequestDataAttributesVulnerabilitiesItems = ScaRequestDataAttributesVulnerabilitiesItems;
/**
 * @ignore
 */
ScaRequestDataAttributesVulnerabilitiesItems.attributeTypeMap = {
    affects: {
        baseName: "affects",
        type: "Array<ScaRequestDataAttributesVulnerabilitiesItemsAffectsItems>",
    },
    bomRef: {
        baseName: "bom_ref",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScaRequestDataAttributesVulnerabilitiesItems.js.map