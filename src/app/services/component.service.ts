import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private route: ActivatedRoute, private router: Router) { }
  
  
  componentName: string | undefined;

  getComponentName() {
    return this.componentName;
  }
  setComponentName(componentName: string|undefined) {
    this.componentName = componentName;
  }
}
