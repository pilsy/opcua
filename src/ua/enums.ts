import { uint32, uint8 } from '../types'

// https://reference.opcfoundation.org/v104/Core/docs/Part6/A.1/
export enum AttributeId {
  Invalid = 0 as uint32,
  NodeId = 1 as uint32,
  NodeClass = 2 as uint32,
  BrowseName = 3 as uint32,
  DisplayName = 4 as uint32,
  Description = 5 as uint32,
  WriteMask = 6 as uint32,
  UserWriteMask = 7 as uint32,
  IsAbstract = 8 as uint32,
  Symmetric = 9 as uint32,
  InverseName = 10 as uint32,
  ContainsNoLoops = 11 as uint32,
  EventNotifier = 12 as uint32,
  Value = 13 as uint32,
  DataType = 14 as uint32,
  ValueRank = 15 as uint32,
  ArrayDimensions = 16 as uint32,
  AccessLevel = 17 as uint32,
  UserAccessLevel = 18 as uint32,
  MinimumSamplingInterval = 19 as uint32,
  Historizing = 20 as uint32,
  Executable = 21 as uint32,
  UserExecutable = 22 as uint32,
  DataTypeDefinition = 23 as uint32,
  RolePermissions = 24 as uint32,
  UserRolePermissions = 25 as uint32,
  AccessRestrictions = 26 as uint32,
  AccessLevelEx = 27 as uint32
}

// https://reference.opcfoundation.org/v104/Core/docs/Part6/5.1.2/
export enum TypeId {
  Null = 0 as uint8, // not part of specification but some servers (e.g. Prosys) return it anyway
  Boolean = 1 as uint8,
  SByte = 2 as uint8,
  Byte = 3 as uint8,
  Int16 = 4 as uint8,
  Uint16 = 5 as uint8,
  Int32 = 6 as uint8,
  Uint32 = 7 as uint8,
  Int64 = 8 as uint8,
  Uint64 = 9 as uint8,
  Float = 10 as uint8,
  Double = 11 as uint8,
  String = 12 as uint8,
  DateTime = 13 as uint8,
  GUID = 14 as uint8,
  ByteString = 15 as uint8,
  XMLElement = 16 as uint8,
  NodeID = 17 as uint8,
  ExpandedNodeID = 18 as uint8,
  StatusCode = 19 as uint8,
  QualifiedName = 20 as uint8,
  LocalizedText = 21 as uint8,
  ExtensionObject = 22 as uint8,
  DataValue = 23 as uint8,
  Variant = 24 as uint8,
  DiagnosticInfo = 25 as uint8
}
