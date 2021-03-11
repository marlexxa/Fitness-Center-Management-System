import { UserInterface } from '../../user/interfaces/user.interface';

export class CreatePassDto {
  user: String;
  //group: String;
  startDate: Date;
  endDate: Date;
  remainingNumber: number;
  price: number;
}
