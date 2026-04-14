"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionQueryCreatePayload = void 0;
/**
 * Create a restriction query.
 */
class RestrictionQueryCreatePayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RestrictionQueryCreatePayload.attributeTypeMap;
    }
}
exports.RestrictionQueryCreatePayload = RestrictionQueryCreatePayload;
/**
 * @ignore
 */
RestrictionQueryCreatePayload.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RestrictionQueryCreateData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RestrictionQueryCreatePayload.js.map