import type { Paginator } from "@smithy/types";
import { GetSpotPlacementScoresCommandInput, GetSpotPlacementScoresCommandOutput } from "../commands/GetSpotPlacementScoresCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetSpotPlacementScores: (config: EC2PaginationConfiguration, input: GetSpotPlacementScoresCommandInput, ...rest: any[]) => Paginator<GetSpotPlacementScoresCommandOutput>;
