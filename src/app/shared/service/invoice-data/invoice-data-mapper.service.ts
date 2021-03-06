import {Injectable} from '@angular/core';
import {InvoiceDataDto} from '../../model/invoice-data/invoice-data.dto';
import {InvoiceDataModel} from '../../model/invoice-data/invoice-data.model';
import {ClientModel} from '../../model/client/client.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDataMapperService {
  constructor() {}

  mapDtoToModel(dto: InvoiceDataDto): InvoiceDataModel {
    return {
      nip: dto.nip,
      name: dto.name,
      firstName: dto.firstName,
      lastName: dto.lastName,
      street: dto.street,
      streetNumber: dto.streetNumber,
      houseNumber: dto.houseNumber,
      city: dto.city,
      postCode: dto.postCode,
      postCity: dto.postCity,
      phone: dto.phone,
      email: dto.email,
      www: dto.www
    };
  }

}
