"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationResponseForwardDestinationHttp = void 0;
/**
 * The HTTP destination.
 */
class CustomDestinationResponseForwardDestinationHttp {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationResponseForwardDestinationHttp.attributeTypeMap;
    }
}
exports.CustomDestinationResponseForwardDestinationHttp = CustomDestinationResponseForwardDestinationHttp;
/**
 * @ignore
 */
CustomDestinationResponseForwardDestinationHttp.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "CustomDestinationResponseHttpDestinationAuth",
        required: true,
    },
    endpoint: {
        baseName: "endpoint",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomDestinationResponseForwardDestinationHttpType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationResponseForwardDestinationHttp.js.map