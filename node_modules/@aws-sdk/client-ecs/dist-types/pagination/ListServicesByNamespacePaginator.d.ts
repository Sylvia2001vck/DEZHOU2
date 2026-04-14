import type { Paginator } from "@smithy/types";
import { ListServicesByNamespaceCommandInput, ListServicesByNamespaceCommandOutput } from "../commands/ListServicesByNamespaceCommand";
import type { ECSPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateListServicesByNamespace: (config: ECSPaginationConfiguration, input: ListServicesByNamespaceCommandInput, ...rest: any[]) => Paginator<ListServicesByNamespaceCommandOutput>;
