/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIotCatalogs = /* GraphQL */ `
  query GetIotCatalogs($serialNumber: String!, $unixTimeStamp: String!) {
    getIotCatalogs(serialNumber: $serialNumber, unixTimeStamp: $unixTimeStamp) {
      serialNumber
      unixTimeStamp
      deviceMos
      deviceLon
      deviceLat
      deviceTemp
    }
  }
`;
export const listIotCatalogs = /* GraphQL */ `
  query ListIotCatalogs(
    $filter: TableIotCatalogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIotCatalogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        serialNumber
        unixTimeStamp
        deviceMos
        deviceLon
        deviceLat
        deviceTemp
      }
      nextToken
    }
  }
`;
export const queryIotCatalogsBySerialNumberUnixTimeStampIndex = /* GraphQL */ `
  query QueryIotCatalogsBySerialNumberUnixTimeStampIndex(
    $serialNumber: String!
    $first: Int
    $after: String
  ) {
    queryIotCatalogsBySerialNumberUnixTimeStampIndex(
      serialNumber: $serialNumber
      first: $first
      after: $after
    ) {
      items {
        serialNumber
        unixTimeStamp
        deviceMos
        deviceLon
        deviceLat
        deviceTemp
      }
      nextToken
    }
  }
`;
export const queryIotCatalogsBySerialNumberIndex = /* GraphQL */ `
  query QueryIotCatalogsBySerialNumberIndex(
    $serialNumber: String!
    $first: Int
    $after: String
  ) {
    queryIotCatalogsBySerialNumberIndex(
      serialNumber: $serialNumber
      first: $first
      after: $after
    ) {
      items {
        serialNumber
        unixTimeStamp
        deviceMos
        deviceLon
        deviceLat
        deviceTemp
      }
      nextToken
    }
  }
`;
