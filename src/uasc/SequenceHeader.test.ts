import SequenceHeader from './SequenceHeader'
import run from '../ua/run'

describe('SequenceHeader', () => {
  run([
    {
      name: 'normal',
      instance: new SequenceHeader({
        SequenceNumber: 51,
        RequestId: 1
      }),
      // prettier-ignore
      bytes: new Uint8Array([
        0x33, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00
      ])
    }
  ])
})
