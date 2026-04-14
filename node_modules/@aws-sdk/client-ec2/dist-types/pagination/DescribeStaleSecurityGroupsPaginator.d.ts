import type { Paginator } from "@smithy/types";
import { DescribeStaleSecurityGroupsCommandInput, DescribeStaleSecurityGroupsCommandOutput } from "../commands/DescribeStaleSecurityGroupsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeStaleSecurityGroups: (config: EC2PaginationConfiguration, input: DescribeStaleSecurityGroupsCommandInput, ...rest: any[]) => Paginator<DescribeStaleSecurityGroupsCommandOutput>;
