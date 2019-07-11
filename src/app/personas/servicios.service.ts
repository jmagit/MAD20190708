import { Injectable } from '@angular/core';
import { LoggerService } from 'src/indra-core';
import { NotificationService } from '../common-app';

export type ModoCRUD = 'list' | 'add' | 'edit' | 'view' | 'delete';

@Injectable({
  providedIn: 'root'
})
export class PersonasViewModelService {
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;
  protected pk = 'id';

  constructor(protected out: LoggerService, protected notify: NotificationService) { }


}
