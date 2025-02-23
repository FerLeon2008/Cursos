import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsResolver } from './payments/payments.resolver';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, AuthModule, ProjectsModule, UsersModule, PaymentsModule],
  controllers: [HelloController],
  providers: [PaymentsResolver],
})
export class AppModule {}
