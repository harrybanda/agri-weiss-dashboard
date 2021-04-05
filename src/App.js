import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import ReactWeather, { useWeatherBit } from "react-open-weather";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { listIotCatalogs } from "./graphql/queries";

import Header from "./Header";

Amplify.configure(awsconfig);

function App() {
  const [iotDevices, setIotDevices] = useState([]);

  const { data, isLoading, errorMessage } = useWeatherBit({
    key: "2a4fc792351e44e4ad14f9b9b9b4915a",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "M",
  });

  const Map = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {props.isMarkerShown && (
          <Marker position={{ lat: iotDevices[0].deviceLat, lng: iotDevices[0].deviceLon }} />
        )}
      </GoogleMap>
    ))
  );

  const chartData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const getIotCat = async () => {
    const iotCatalogs = await API.graphql(graphqlOperation(listIotCatalogs));
    setIotDevices(iotCatalogs.data.listIotCatalogs.items);
  };

  useEffect(() => {
    getIotCat();
  }, []);

  if (!iotDevices[0]) return null;

  return (
    <div>
      <Header />
      <section class="section has-background-light">
        <h1 class="title">Dashboard</h1>
        <div class="columns">
          <div class="column is-full">
            <div class="box">
              <h2 class="subtitle">Map</h2>
              <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDjWSXR7Dht65qeTv9PnoOhZ020SdjeeCc&v=3.exp"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <div class="box">
              <h2 class="subtitle">Soil Moisture</h2>
              <div></div>
              <LineChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
          <div class="column is-half">
            <div class="box">
              <h2 class="subtitle">Weather</h2>
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="Munich"
                unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
                showForecast
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default withAuthenticator(App);
