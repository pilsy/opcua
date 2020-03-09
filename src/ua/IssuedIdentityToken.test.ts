import { IssuedIdentityToken } from './generated'
import run from './run'

describe('IssuedIdentityToken', () => {
  run([
    {
      name: 'normal',
      instance: new IssuedIdentityToken({
        PolicyId: 'issued',
        // prettier-ignore
        TokenData: new Uint8Array([
          0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64
        ]),
        EncryptionAlgorithm: 'plain'
      }),
      // prettier-ignore
      bytes: new Uint8Array([
        0x06, 0x00, 0x00, 0x00, 0x69, 0x73, 0x73, 0x75,
        0x65, 0x64, 0x08, 0x00, 0x00, 0x00, 0x70, 0x61,
        0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x05, 0x00,
        0x00, 0x00, 0x70, 0x6c, 0x61, 0x69, 0x6e,
      ])
    }
  ])
})
