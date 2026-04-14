"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppsDatastoreItemRequestDataAttributesItemChanges = void 0;
/**
 * Changes to apply to a datastore item using set operations.
 */
class UpdateAppsDatastoreItemRequestDataAttributesItemChanges {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppsDatastoreItemRequestDataAttributesItemChanges.attributeTypeMap;
    }
}
exports.UpdateAppsDatastoreItemRequestDataAttributesItemChanges = UpdateAppsDatastoreItemRequestDataAttributesItemChanges;
/**
 * @ignore
 */
UpdateAppsDatastoreItemRequestDataAttributesItemChanges.attributeTypeMap = {
    opsSet: {
        baseName: "ops_set",
        type: "{ [key: string]: any; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateAppsDatastoreItemRequestDataAttributesItemChanges.js.map