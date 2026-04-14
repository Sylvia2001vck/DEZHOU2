"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationForwardDestinationHttp = void 0;
/**
 * The HTTP destination.
 */
class CustomDestinationForwardDestinationHttp {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationForwardDestinationHttp.attributeTypeMap;
    }
}
exports.CustomDestinationForwardDestinationHttp = CustomDestinationForwardDestinationHttp;
/**
 * @ignore
 */
CustomDestinationForwardDestinationHttp.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "CustomDestinationHttpDestinationAuth",
        required: true,
    },
    endpoint: {
        baseName: "endpoint",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomDestinationForwardDestinationHttpType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationForwardDestinationHttp.js.map