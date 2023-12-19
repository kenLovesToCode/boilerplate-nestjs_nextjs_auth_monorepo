import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

@Injectable()
export class ToolsService {
  private readonly algorithm = 'aes-256-ctr';

  encryptToken = async (value: string) => {
    try {
      const secretKey = process.env.USER_SESSION_SECRET_KEY || '';
      const iv = randomBytes(16);
      const key = (await promisify(scrypt)(secretKey, 'salt', 32)) as Buffer;
      const cipher = createCipheriv(this.algorithm, key, iv);
      let encryptedText = cipher.update(value, 'utf8', 'hex');
      encryptedText += cipher.final('hex');

      return iv.toString('hex') + encryptedText;
    } catch (error) {
      throw new UnauthorizedException();
    }
  };
}
