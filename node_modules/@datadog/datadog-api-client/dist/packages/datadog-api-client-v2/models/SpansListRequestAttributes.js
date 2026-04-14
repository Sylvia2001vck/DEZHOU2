"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansListRequestAttributes = void 0;
/**
 * The object containing all the query parameters.
 */
class SpansListRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansListRequestAttributes.attributeTypeMap;
    }
}
exports.SpansListRequestAttributes = SpansListRequestAttributes;
/**
 * @ignore
 */
SpansListRequestAttributes.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "SpansQueryFilter",
    },
    options: {
        baseName: "options",
        type: "SpansQueryOptions",
    },
    page: {
        baseName: "page",
        type: "SpansListRequestPage",
    },
    sort: {
        baseName: "sort",
        type: "SpansSort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansListRequestAttributes.js.map