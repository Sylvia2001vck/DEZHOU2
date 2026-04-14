"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAccounResponseAttributes = void 0;
/**
 * Attributes object of a Fastly account.
 */
class FastlyAccounResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAccounResponseAttributes.attributeTypeMap;
    }
}
exports.FastlyAccounResponseAttributes = FastlyAccounResponseAttributes;
/**
 * @ignore
 */
FastlyAccounResponseAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    services: {
        baseName: "services",
        type: "Array<FastlyService>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyAccounResponseAttributes.js.map