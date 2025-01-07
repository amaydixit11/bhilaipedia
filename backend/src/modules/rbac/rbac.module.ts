import { Module } from '@nestjs/common';
import { RoleController } from './controllers/role.controller';
import { RoleService } from './services/role.service';
import { PermissionController } from './controllers/permission.controller';
import { PermissionService } from './services/permission.service';

@Module({
  controllers: [RoleController, PermissionController],
  providers: [RoleService, PermissionService]
})
export class RbacModule {}
