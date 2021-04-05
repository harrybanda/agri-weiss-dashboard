/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIotCatalogs = /* GraphQL */ `
  subscription OnCreateIotCatalogs(
    $serialNumber: String
    $unixTimeStamp: String
    $deviceMos: String
    $deviceLon: String
    $deviceLat: String
  ) {
    onCreateIotCatalogs(
      serialNumber: $serialNumber
      unixTimeStamp: $unixTimeStamp
      deviceMos: $deviceMos
      deviceLon: $deviceLon
      deviceLat: $deviceLat
    ) {
      serialNumber
      unixTimeStamp
      deviceMos
      deviceLon
      deviceLat
      deviceTemp
    }
  }
`;
export const onUpdateIotCatalogs = /* GraphQL */ `
  subscription OnUpdateIotCatalogs(
    $serialNumber: String
    $unixTimeStamp: String
    $deviceMos: String
    $deviceLon: String
    $deviceLat: String
  ) {
    onUpdateIotCatalogs(
      serialNumber: $serialNumber
      unixTimeStamp: $unixTimeStamp
      deviceMos: $deviceMos
      deviceLon: $deviceLon
      deviceLat: $deviceLat
    ) {
      serialNumber
      unixTimeStamp
      deviceMos
      deviceLon
      deviceLat
      deviceTemp
    }
  }
`;
export const onDeleteIotCatalogs = /* GraphQL */ `
  subscription OnDeleteIotCatalogs(
    $serialNumber: String
    $unixTimeStamp: String
    $deviceMos: String
    $deviceLon: String
    $deviceLat: String
  ) {
    onDeleteIotCatalogs(
      serialNumber: $serialNumber
      unixTimeStamp: $unixTimeStamp
      deviceMos: $deviceMos
      deviceLon: $deviceLon
      deviceLat: $deviceLat
    ) {
      serialNumber
      unixTimeStamp
      deviceMos
      deviceLon
      deviceLat
      deviceTemp
    }
  }
`;
