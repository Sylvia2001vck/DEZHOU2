"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyServiceData = void 0;
/**
 * Data object for Fastly service requests.
 */
class FastlyServiceData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyServiceData.attributeTypeMap;
    }
}
exports.FastlyServiceData = FastlyServiceData;
/**
 * @ignore
 */
FastlyServiceData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FastlyServiceAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FastlyServiceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyServiceData.js.map