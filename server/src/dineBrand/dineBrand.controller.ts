import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DineBrandService } from "./dineBrand.service";
import { DineBrandControllerBase } from "./base/dineBrand.controller.base";

@swagger.ApiTags("dine-brands")
@common.Controller("dine-brands")
export class DineBrandController extends DineBrandControllerBase {
  constructor(
    protected readonly service: DineBrandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
