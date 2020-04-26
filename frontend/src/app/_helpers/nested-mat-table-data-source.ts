import { MatTableDataSource } from '@angular/material/table';

export class NestedMatTableDataSource<T> extends MatTableDataSource<T> {
    
    constructor(initialData: T[] = []) {
        super(initialData);
      }
      
      sortingDataAccessor: any =
        (data: object, sortHeaderId: string): string | number => {
          const propPath = sortHeaderId.split('.');
          const value: any = propPath
            .reduce((curObj, property) => curObj[property], data);
          return !isNaN(value) ? Number(value) : value;
        };

}

