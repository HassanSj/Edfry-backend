// src/otp-generator.d.ts

declare module 'otp-generator' {
    export function generateSecret(options?: {
      length?: number;
      symbols?: boolean;
    }): string;
  
    export namespace totp {
      function generate(secret: string): string;
      function verify(options: {
        secret: string;
        token: string;
        window?: number;
      }): boolean;
    }
  }
  