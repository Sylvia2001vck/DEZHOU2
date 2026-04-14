"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackData = void 0;
/**
 * Powerpack data object.
 */
class PowerpackData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackData.attributeTypeMap;
    }
}
exports.PowerpackData = PowerpackData;
/**
 * @ignore
 */
PowerpackData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PowerpackAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "PowerpackRelationships",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackData.js.map