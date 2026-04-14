"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationUpdate = void 0;
/**
 * RUM application update.
 */
class RUMApplicationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationUpdate.attributeTypeMap;
    }
}
exports.RUMApplicationUpdate = RUMApplicationUpdate;
/**
 * @ignore
 */
RUMApplicationUpdate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RUMApplicationUpdateAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "RUMApplicationUpdateType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMApplicationUpdate.js.map