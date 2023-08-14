import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { hashData } from 'src/utils/security';
import { AuthDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Tokens } from './types';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(accountInfo: AuthDto): Promise<Tokens> {
    const user = await this.usersService.findOne(accountInfo.email);
    const salt = user.hash.split(':')[0];
    const hashPass = hashData(accountInfo.password, salt);
    if (user?.hash.split(':')[1] != hashPass) {
      throw new UnauthorizedException();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { hash, ...payload } = user;
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  //async signUp(accountInfo: User): Promise<User | null> {}
}
