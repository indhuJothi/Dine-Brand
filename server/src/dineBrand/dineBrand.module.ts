import { Module } from "@nestjs/common";
import { DineBrandModuleBase } from "./base/dineBrand.module.base";
import { DineBrandService } from "./dineBrand.service";
import { DineBrandController } from "./dineBrand.controller";
import { DineBrandResolver } from "./dineBrand.resolver";

@Module({
  imports: [DineBrandModuleBase],
  controllers: [DineBrandController],
  providers: [DineBrandService, DineBrandResolver],
  exports: [DineBrandService],
})
export class DineBrandModule {}
