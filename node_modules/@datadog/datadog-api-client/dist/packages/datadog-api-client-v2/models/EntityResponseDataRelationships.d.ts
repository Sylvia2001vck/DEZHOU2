/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityResponseDataRelationshipsIncidents } from "./EntityResponseDataRelationshipsIncidents";
import { EntityResponseDataRelationshipsOncalls } from "./EntityResponseDataRelationshipsOncalls";
import { EntityResponseDataRelationshipsRawSchema } from "./EntityResponseDataRelationshipsRawSchema";
import { EntityResponseDataRelationshipsRelatedEntities } from "./EntityResponseDataRelationshipsRelatedEntities";
import { EntityResponseDataRelationshipsSchema } from "./EntityResponseDataRelationshipsSchema";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
export declare class EntityResponseDataRelationships {
    "incidents"?: EntityResponseDataRelationshipsIncidents;
    "oncalls"?: EntityResponseDataRelationshipsOncalls;
    "rawSchema"?: EntityResponseDataRelationshipsRawSchema;
    "relatedEntities"?: EntityResponseDataRelationshipsRelatedEntities;
    "schema"?: EntityResponseDataRelationshipsSchema;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
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
