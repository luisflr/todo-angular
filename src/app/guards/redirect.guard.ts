import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PermissionsService } from '@services/permission.service';

import { TokenService } from '@services/token.service';

export const redirectGuard: CanActivateFn = () => {
  return inject(PermissionsService).canMatch(inject(TokenService), '/board');
};
