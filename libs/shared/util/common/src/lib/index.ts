import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export function isHandsetScreen () {
  return inject(BreakpointObserver).observe(Breakpoints.Handset)
    .pipe(map(isMatch => isMatch.matches));
}
