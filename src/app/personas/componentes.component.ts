import { Component, OnInit } from '@angular/core';
import { PersonasViewModelService } from './servicios.service';

@Component({
  selector: 'app-personas',
  templateUrl: './template.component.html',
  styleUrls: ['./estilos.component.css']
})
export class PersonasComponent implements OnInit {
  constructor(private vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
  }
}

@Component({
  selector: 'app-personas-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./estilos.component.css']
})
export class PersonasListComponent implements OnInit {
  constructor(private vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
  }
}

@Component({
  selector: 'app-personas-add',
  templateUrl: './template-form.component.html',
  styleUrls: ['./estilos.component.css']
})
export class PersonasAddComponent implements OnInit {
  constructor(private vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
  }
}

@Component({
  selector: 'app-personas-edit',
  templateUrl: './template-form.component.html',
  styleUrls: ['./estilos.component.css']
})
export class PersonasEditComponent implements OnInit {
  constructor(private vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
  }
}

@Component({
  selector: 'app-personas-view',
  templateUrl: './template-view.component.html',
  styleUrls: ['./estilos.component.css']
})
export class PersonasViewComponent implements OnInit {
  constructor(private vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
  }
}

export const PERSONAS_COMPONENTS = [ PersonasComponent, PersonasListComponent, PersonasAddComponent,
  PersonasEditComponent, PersonasViewComponent];
