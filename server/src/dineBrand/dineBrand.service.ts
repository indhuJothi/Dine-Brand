import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DineBrandServiceBase } from "./base/dineBrand.service.base";

@Injectable()
export class DineBrandService extends DineBrandServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
