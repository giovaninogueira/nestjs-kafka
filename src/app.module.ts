import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserCreateModule } from './app/use-cases/user-create/user-create.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientsModule.register([
      {
        name: 'CREATE_USER',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'billing',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'create-user',
          },
        },
      },
    ]),
    UserCreateModule,
  ],
})
export class AppModule {}
