import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDto } from '@app/common';

const getCurrentUserByContext = (context: ExecutionContext): UserDto => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
