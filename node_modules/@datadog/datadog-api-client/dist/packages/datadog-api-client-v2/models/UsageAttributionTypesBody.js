"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageAttributionTypesBody = void 0;
/**
 * Usage attribution types data.
 */
class UsageAttributionTypesBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageAttributionTypesBody.attributeTypeMap;
    }
}
exports.UsageAttributionTypesBody = UsageAttributionTypesBody;
/**
 * @ignore
 */
UsageAttributionTypesBody.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UsageAttributionTypesAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UsageAttributionTypesType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageAttributionTypesBody.js.map