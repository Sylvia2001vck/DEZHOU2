"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseDataRelationshipsOncalls = void 0;
class EntityResponseDataRelationshipsOncalls {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseDataRelationshipsOncalls.attributeTypeMap;
    }
}
exports.EntityResponseDataRelationshipsOncalls = EntityResponseDataRelationshipsOncalls;
/**
 * @ignore
 */
EntityResponseDataRelationshipsOncalls.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<EntityResponseDataRelationshipsOncallsDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityResponseDataRelationshipsOncalls.js.map