"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryUpdatePayload = void 0;
/**
 * Update a restriction query.
 */
class RestrictionQueryUpdatePayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryUpdatePayload.attributeTypeMap;
    }
}
exports.RestrictionQueryUpdatePayload = RestrictionQueryUpdatePayload;
/**
 * @ignore
 */
RestrictionQueryUpdatePayload.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RestrictionQueryUpdateData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionQueryUpdatePayload.js.map