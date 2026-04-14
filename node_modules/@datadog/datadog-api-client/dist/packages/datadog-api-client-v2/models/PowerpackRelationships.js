"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackRelationships = void 0;
/**
 * Powerpack relationship object.
 */
class PowerpackRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackRelationships.attributeTypeMap;
    }
}
exports.PowerpackRelationships = PowerpackRelationships;
/**
 * @ignore
 */
PowerpackRelationships.attributeTypeMap = {
    author: {
        baseName: "author",
        type: "RelationshipToUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackRelationships.js.map