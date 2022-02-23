import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DineBrandResolverBase } from "./base/dineBrand.resolver.base";
import { DineBrand } from "./base/DineBrand";
import { DineBrandService } from "./dineBrand.service";

@graphql.Resolver(() => DineBrand)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DineBrandResolver extends DineBrandResolverBase {
  constructor(
    protected readonly service: DineBrandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
