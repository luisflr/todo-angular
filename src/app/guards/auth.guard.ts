import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PermissionsService } from '@services/permission.service';

import { TokenService } from '@services/token.service';

export const authGuard: CanActivateFn = () => {
  return inject(PermissionsService).canActivate(inject(TokenService), '/');
};

