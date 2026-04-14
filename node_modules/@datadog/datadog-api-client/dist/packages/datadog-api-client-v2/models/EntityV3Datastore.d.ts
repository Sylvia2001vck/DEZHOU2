/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3APIVersion } from "./EntityV3APIVersion";
import { EntityV3DatastoreDatadog } from "./EntityV3DatastoreDatadog";
import { EntityV3DatastoreKind } from "./EntityV3DatastoreKind";
import { EntityV3DatastoreSpec } from "./EntityV3DatastoreSpec";
import { EntityV3Integrations } from "./EntityV3Integrations";
import { EntityV3Metadata } from "./EntityV3Metadata";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Schema for datastore entities.
 */
export declare class EntityV3Datastore {
    /**
     * The version of the schema data that was used to populate this entity's data. This could be via the API, Terraform, or YAML file in a repository. The field is known as schema-version in the previous version.
     */
    "apiVersion": EntityV3APIVersion;
    /**
     * Datadog product integrations for the datastore entity.
     */
    "datadog"?: EntityV3DatastoreDatadog;
    /**
     * Custom extensions. This is the free-formed field to send client side metadata. No Datadog features are affected by this field.
     */
    "extensions"?: {
        [key: string]: any;
    };
    /**
     * A base schema for defining third-party integrations.
     */
    "integrations"?: EntityV3Integrations;
    /**
     * The definition of Entity V3 Datastore Kind object.
     */
    "kind": EntityV3DatastoreKind;
    /**
     * The definition of Entity V3 Metadata object.
     */
    "metadata": EntityV3Metadata;
    /**
     * The definition of Entity V3 Datastore Spec object.
     */
    "spec"?: EntityV3DatastoreSpec;
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
