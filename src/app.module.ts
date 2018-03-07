import { Module } from '@nestjs/common';
import { RestModule } from './rest.module';
import { MvcModule } from './mvc.module';

// path property to modules
// https://github.com/nestjs/nest/pull/297
@Module({
  imports: [ RestModule ],
  controllers: [ ],
  components: [ ],
})
export class ApplicationModule {}
