"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackResponse = void 0;
/**
 * Response object which includes a single powerpack configuration.
 */
class PowerpackResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackResponse.attributeTypeMap;
    }
}
exports.PowerpackResponse = PowerpackResponse;
/**
 * @ignore
 */
PowerpackResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PowerpackData",
    },
    included: {
        baseName: "included",
        type: "Array<User>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackResponse.js.map