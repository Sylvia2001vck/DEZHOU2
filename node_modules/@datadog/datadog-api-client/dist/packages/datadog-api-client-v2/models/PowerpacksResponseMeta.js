"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpacksResponseMeta = void 0;
/**
 * Powerpack response metadata.
 */
class PowerpacksResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpacksResponseMeta.attributeTypeMap;
    }
}
exports.PowerpacksResponseMeta = PowerpacksResponseMeta;
/**
 * @ignore
 */
PowerpacksResponseMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "PowerpacksResponseMetaPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpacksResponseMeta.js.map