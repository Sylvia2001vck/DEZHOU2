/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * Supported relation types.
 */
export declare type RelationType = typeof RELATIONTYPEOWNS | typeof RELATIONTYPEOWNEDBY | typeof RELATIONTYPEDEPENDSON | typeof RELATIONTYPEDEPENDENCYOF | typeof RELATIONTYPEPARTSOF | typeof RELATIONTYPEHASPART | typeof RELATIONTYPEOTHEROWNS | typeof RELATIONTYPEOTHEROWNEDBY | typeof RELATIONTYPEIMPLEMENTEDBY | typeof RELATIONTYPEIMPLEMENTS | UnparsedObject;
export declare const RELATIONTYPEOWNS = "RelationTypeOwns";
export declare const RELATIONTYPEOWNEDBY = "RelationTypeOwnedBy";
export declare const RELATIONTYPEDEPENDSON = "RelationTypeDependsOn";
export declare const RELATIONTYPEDEPENDENCYOF = "RelationTypeDependencyOf";
export declare const RELATIONTYPEPARTSOF = "RelationTypePartsOf";
export declare const RELATIONTYPEHASPART = "RelationTypeHasPart";
export declare const RELATIONTYPEOTHEROWNS = "RelationTypeOtherOwns";
export declare const RELATIONTYPEOTHEROWNEDBY = "RelationTypeOtherOwnedBy";
export declare const RELATIONTYPEIMPLEMENTEDBY = "RelationTypeImplementedBy";
export declare const RELATIONTYPEIMPLEMENTS = "RelationTypeImplements";
