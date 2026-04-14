"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationElasticsearchDestinationAuth = void 0;
/**
 * Basic access authentication.
 */
class CustomDestinationElasticsearchDestinationAuth {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationElasticsearchDestinationAuth.attributeTypeMap;
    }
}
exports.CustomDestinationElasticsearchDestinationAuth = CustomDestinationElasticsearchDestinationAuth;
/**
 * @ignore
 */
CustomDestinationElasticsearchDestinationAuth.attributeTypeMap = {
    password: {
        baseName: "password",
        type: "string",
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
//# sourceMappingURL=CustomDestinationElasticsearchDestinationAuth.js.map