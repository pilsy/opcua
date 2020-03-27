import run from './run'
import {
  CreateSessionResponse,
  ResponseHeader,
  SignatureData,
  EndpointDescription,
  ApplicationDescription,
  ApplicationType,
  MessageSecurityMode,
  UserTokenPolicy,
  UserTokenType,
} from '../../dist/ua/generated'
import DiagnosticInfo from '../../dist/ua/DiagnosticInfo'
import ExtensionObject from '../../dist/ua/ExtensionObject'
import { NewNumericNodeId, NewByteStringNodeId } from '../../dist/ua/NodeId'
import LocalizedText, { LocalizedTextText } from '../../dist/ua/LocalizedText'

describe('CreateSessionResponse', () => {
  run([
    {
      name: 'normal',
      instance: new CreateSessionResponse({
        ResponseHeader: new ResponseHeader({
          Timestamp: new Date(Date.UTC(2018, 7, 10, 23, 0, 0, 0)),
          RequestHandle: 1,
          ServiceDiagnostics: new DiagnosticInfo(),
          StringTable: [],
          AdditionalHeader: new ExtensionObject(),
        }),
        SessionId: NewNumericNodeId(0, 1),
        // prettier-ignore
        AuthenticationToken: NewByteStringNodeId(0, new Uint8Array([
            0x08, 0x22, 0x87, 0x62, 0xba, 0x81, 0xe1, 0x11,
            0xa6, 0x43, 0xf8, 0x77, 0x7b, 0xc6, 0x2f, 0xc8,
          ])),
        RevisedSessionTimeout: 6000000,
        MaxRequestMessageSize: 65534,
        ServerSignature: new SignatureData({
          Algorithm: 'http://www.w3.org/2000/09/xmldsig#rsa-sha1',
        }),
        ServerEndpoints: [
          new EndpointDescription({
            EndpointUrl: 'ep-url',
            Server: new ApplicationDescription({
              ApplicationUri: 'app-uri',
              ProductUri: 'prod-uri',
              ApplicationName: new LocalizedText({
                EncodingMask: LocalizedTextText,
                Text: 'app-name',
              }),
              ApplicationType: ApplicationType.Server,
              GatewayServerUri: 'gw-uri',
              DiscoveryProfileUri: 'prof-uri',
              DiscoveryUrls: ['discov-uri-1', 'discov-uri-2'],
            }),
            SecurityMode: MessageSecurityMode.None,
            SecurityPolicyUri: 'sec-uri',
            UserIdentityTokens: [
              new UserTokenPolicy({
                PolicyId: '1',
                TokenType: UserTokenType.Anonymous,
                IssuedTokenType: 'issued-token',
                IssuerEndpointUrl: 'issuer-uri',
                SecurityPolicyUri: 'sec-uri',
              }),
              new UserTokenPolicy({
                PolicyId: '1',
                TokenType: UserTokenType.Anonymous,
                IssuedTokenType: 'issued-token',
                IssuerEndpointUrl: 'issuer-uri',
                SecurityPolicyUri: 'sec-uri',
              }),
            ],
            TransportProfileUri: 'trans-uri',
          }),
          new EndpointDescription({
            EndpointUrl: 'ep-url',
            Server: new ApplicationDescription({
              ApplicationUri: 'app-uri',
              ProductUri: 'prod-uri',
              ApplicationName: new LocalizedText({
                EncodingMask: LocalizedTextText,
                Text: 'app-name',
              }),
              ApplicationType: ApplicationType.Server,
              GatewayServerUri: 'gw-uri',
              DiscoveryProfileUri: 'prof-uri',
              DiscoveryUrls: ['discov-uri-1', 'discov-uri-2'],
            }),
            SecurityMode: MessageSecurityMode.None,
            SecurityPolicyUri: 'sec-uri',
            UserIdentityTokens: [
              new UserTokenPolicy({
                PolicyId: '1',
                TokenType: UserTokenType.Anonymous,
                IssuedTokenType: 'issued-token',
                IssuerEndpointUrl: 'issuer-uri',
                SecurityPolicyUri: 'sec-uri',
              }),
              new UserTokenPolicy({
                PolicyId: '1',
                TokenType: UserTokenType.Anonymous,
                IssuedTokenType: 'issued-token',
                IssuerEndpointUrl: 'issuer-uri',
                SecurityPolicyUri: 'sec-uri',
              }),
            ],
            TransportProfileUri: 'trans-uri',
          }),
        ],
      }),
      // prettier-ignore
      bytes: new Uint8Array([
        0x00, 0x98, 0x67, 0xdd, 0xfd, 0x30, 0xd4, 0x01,
        0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x02, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x05,
        0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x08, 0x22,
        0x87, 0x62, 0xba, 0x81, 0xe1, 0x11, 0xa6, 0x43,
        0xf8, 0x77, 0x7b, 0xc6, 0x2f, 0xc8, 0x00, 0x00,
        0x00, 0x00, 0x60, 0xe3, 0x56, 0x41, 0xff, 0xff,
        0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x02, 0x00,
        0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x65, 0x70,
        0x2d, 0x75, 0x72, 0x6c, 0x07, 0x00, 0x00, 0x00,
        0x61, 0x70, 0x70, 0x2d, 0x75, 0x72, 0x69, 0x08,
        0x00, 0x00, 0x00, 0x70, 0x72, 0x6f, 0x64, 0x2d,
        0x75, 0x72, 0x69, 0x02, 0x08, 0x00, 0x00, 0x00,
        0x61, 0x70, 0x70, 0x2d, 0x6e, 0x61, 0x6d, 0x65,
        0x00, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00,
        0x67, 0x77, 0x2d, 0x75, 0x72, 0x69, 0x08, 0x00,
        0x00, 0x00, 0x70, 0x72, 0x6f, 0x66, 0x2d, 0x75,
        0x72, 0x69, 0x02, 0x00, 0x00, 0x00, 0x0c, 0x00,
        0x00, 0x00, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x76,
        0x2d, 0x75, 0x72, 0x69, 0x2d, 0x31, 0x0c, 0x00,
        0x00, 0x00, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x76,
        0x2d, 0x75, 0x72, 0x69, 0x2d, 0x32, 0xff, 0xff,
        0xff, 0xff, 0x01, 0x00, 0x00, 0x00, 0x07, 0x00,
        0x00, 0x00, 0x73, 0x65, 0x63, 0x2d, 0x75, 0x72,
        0x69, 0x02, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00,
        0x00, 0x31, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x00,
        0x00, 0x00, 0x69, 0x73, 0x73, 0x75, 0x65, 0x64,
        0x2d, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x0a, 0x00,
        0x00, 0x00, 0x69, 0x73, 0x73, 0x75, 0x65, 0x72,
        0x2d, 0x75, 0x72, 0x69, 0x07, 0x00, 0x00, 0x00,
        0x73, 0x65, 0x63, 0x2d, 0x75, 0x72, 0x69, 0x01,
        0x00, 0x00, 0x00, 0x31, 0x00, 0x00, 0x00, 0x00,
        0x0c, 0x00, 0x00, 0x00, 0x69, 0x73, 0x73, 0x75,
        0x65, 0x64, 0x2d, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
        0x0a, 0x00, 0x00, 0x00, 0x69, 0x73, 0x73, 0x75,
        0x65, 0x72, 0x2d, 0x75, 0x72, 0x69, 0x07, 0x00,
        0x00, 0x00, 0x73, 0x65, 0x63, 0x2d, 0x75, 0x72,
        0x69, 0x09, 0x00, 0x00, 0x00, 0x74, 0x72, 0x61,
        0x6e, 0x73, 0x2d, 0x75, 0x72, 0x69, 0x00, 0x06,
        0x00, 0x00, 0x00, 0x65, 0x70, 0x2d, 0x75, 0x72,
        0x6c, 0x07, 0x00, 0x00, 0x00, 0x61, 0x70, 0x70,
        0x2d, 0x75, 0x72, 0x69, 0x08, 0x00, 0x00, 0x00,
        0x70, 0x72, 0x6f, 0x64, 0x2d, 0x75, 0x72, 0x69,
        0x02, 0x08, 0x00, 0x00, 0x00, 0x61, 0x70, 0x70,
        0x2d, 0x6e, 0x61, 0x6d, 0x65, 0x00, 0x00, 0x00,
        0x00, 0x06, 0x00, 0x00, 0x00, 0x67, 0x77, 0x2d,
        0x75, 0x72, 0x69, 0x08, 0x00, 0x00, 0x00, 0x70,
        0x72, 0x6f, 0x66, 0x2d, 0x75, 0x72, 0x69, 0x02,
        0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x64,
        0x69, 0x73, 0x63, 0x6f, 0x76, 0x2d, 0x75, 0x72,
        0x69, 0x2d, 0x31, 0x0c, 0x00, 0x00, 0x00, 0x64,
        0x69, 0x73, 0x63, 0x6f, 0x76, 0x2d, 0x75, 0x72,
        0x69, 0x2d, 0x32, 0xff, 0xff, 0xff, 0xff, 0x01,
        0x00, 0x00, 0x00, 0x07, 0x00, 0x00, 0x00, 0x73,
        0x65, 0x63, 0x2d, 0x75, 0x72, 0x69, 0x02, 0x00,
        0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x31, 0x00,
        0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x69,
        0x73, 0x73, 0x75, 0x65, 0x64, 0x2d, 0x74, 0x6f,
        0x6b, 0x65, 0x6e, 0x0a, 0x00, 0x00, 0x00, 0x69,
        0x73, 0x73, 0x75, 0x65, 0x72, 0x2d, 0x75, 0x72,
        0x69, 0x07, 0x00, 0x00, 0x00, 0x73, 0x65, 0x63,
        0x2d, 0x75, 0x72, 0x69, 0x01, 0x00, 0x00, 0x00,
        0x31, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x00, 0x00,
        0x00, 0x69, 0x73, 0x73, 0x75, 0x65, 0x64, 0x2d,
        0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x0a, 0x00, 0x00,
        0x00, 0x69, 0x73, 0x73, 0x75, 0x65, 0x72, 0x2d,
        0x75, 0x72, 0x69, 0x07, 0x00, 0x00, 0x00, 0x73,
        0x65, 0x63, 0x2d, 0x75, 0x72, 0x69, 0x09, 0x00,
        0x00, 0x00, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x2d,
        0x75, 0x72, 0x69, 0x00, 0xff, 0xff, 0xff, 0xff,
        0x2a, 0x00, 0x00, 0x00, 0x68, 0x74, 0x74, 0x70,
        0x3a, 0x2f, 0x2f, 0x77, 0x77, 0x77, 0x2e, 0x77,
        0x33, 0x2e, 0x6f, 0x72, 0x67, 0x2f, 0x32, 0x30,
        0x30, 0x30, 0x2f, 0x30, 0x39, 0x2f, 0x78, 0x6d,
        0x6c, 0x64, 0x73, 0x69, 0x67, 0x23, 0x72, 0x73,
        0x61, 0x2d, 0x73, 0x68, 0x61, 0x31, 0xff, 0xff,
        0xff, 0xff, 0xfe, 0xff, 0x00, 0x00,
    ])
    },
  ])
})
