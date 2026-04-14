import type { Paginator } from "@smithy/types";
import { GetGroupsForCapacityReservationCommandInput, GetGroupsForCapacityReservationCommandOutput } from "../commands/GetGroupsForCapacityReservationCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetGroupsForCapacityReservation: (config: EC2PaginationConfiguration, input: GetGroupsForCapacityReservationCommandInput, ...rest: any[]) => Paginator<GetGroupsForCapacityReservationCommandOutput>;
