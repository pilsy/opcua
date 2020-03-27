import run from './run'
import {
  ReadRequest,
  RequestHeader,
  TimestampsToReturn,
  ReadValueId,
} from '../../dist/ua/generated'
import { NewByteStringNodeId, NewFourByteNodeId } from '../../dist/ua/NodeId'
import ExtensionObject from '../../dist/ua/ExtensionObject'
import { AttributeId } from '../../dist/ua/enums'
import QualifiedName from '../../dist/ua/QualifiedName'

describe('ReadRequest', () => {
  run([
    {
      name: 'normal',
      instance: new ReadRequest({
        RequestHeader: new RequestHeader({
          // prettier-ignore
          AuthenticationToken: NewByteStringNodeId(0x00, new Uint8Array([
            0x08, 0x22, 0x87, 0x62, 0xba, 0x81, 0xe1, 0x11,
            0xa6, 0x43, 0xf8, 0x77, 0x7b, 0xc6, 0x2f, 0xc8,
          ])),
          Timestamp: new Date(Date.UTC(2018, 7, 10, 23, 0, 0, 0)),
          RequestHandle: 1,
          AdditionalHeader: new ExtensionObject(),
        }),
        MaxAge: 0,
        TimestampsToReturn: TimestampsToReturn.Both,
        NodesToRead: [
          new ReadValueId({
            NodeId: NewFourByteNodeId(0, 2256),
            AttributeId: AttributeId.Value,
            DataEncoding: new QualifiedName(),
          }),
        ],
      }),
      // prettier-ignore
      bytes: new Uint8Array([
        0x05, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x08,
        0x22, 0x87, 0x62, 0xba, 0x81, 0xe1, 0x11, 0xa6,
        0x43, 0xf8, 0x77, 0x7b, 0xc6, 0x2f, 0xc8, 0x00,
        0x98, 0x67, 0xdd, 0xfd, 0x30, 0xd4, 0x01, 0x01,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff,
        0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 0x01, 0x00,
        0x00, 0x00, 0x01, 0x00, 0xd0, 0x08, 0x0d, 0x00,
        0x00, 0x00, 0xff, 0xff, 0xff, 0xff, 0x00, 0x00,
        0xff, 0xff, 0xff, 0xff,
      ])
    },
  ])
})
