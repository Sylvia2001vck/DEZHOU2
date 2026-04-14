"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationHttpDestinationAuthBasic = void 0;
/**
 * Basic access authentication.
 */
class CustomDestinationHttpDestinationAuthBasic {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationHttpDestinationAuthBasic.attributeTypeMap;
    }
}
exports.CustomDestinationHttpDestinationAuthBasic = CustomDestinationHttpDestinationAuthBasic;
/**
 * @ignore
 */
CustomDestinationHttpDestinationAuthBasic.attributeTypeMap = {
    password: {
        baseName: "password",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomDestinationHttpDestinationAuthBasicType",
        required: true,
    },
    username: {
        baseName: "username",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationHttpDestinationAuthBasic.js.map