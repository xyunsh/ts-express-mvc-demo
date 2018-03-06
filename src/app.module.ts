import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees.module';


@Module({
  imports: [ EmployeesModule ],
  controllers: [ ],
  components: [ ],
})
export class ApplicationModule {}
