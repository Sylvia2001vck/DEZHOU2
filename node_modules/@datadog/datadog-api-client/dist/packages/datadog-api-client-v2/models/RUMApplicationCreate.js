"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMApplicationCreate = void 0;
/**
 * RUM application creation.
 */
class RUMApplicationCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMApplicationCreate.attributeTypeMap;
    }
}
exports.RUMApplicationCreate = RUMApplicationCreate;
/**
 * @ignore
 */
RUMApplicationCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RUMApplicationCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "RUMApplicationCreateType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMApplicationCreate.js.map