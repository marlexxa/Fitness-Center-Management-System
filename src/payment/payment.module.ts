import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from './entities/payment.entity';
import { UserSchema } from '../user/entities/user.entity';
import { DepositSchema } from '../deposit/entities/deposit.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Payment',
        schema: PaymentSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'Deposit',
        schema: DepositSchema,
      },
    ]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
