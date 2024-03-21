import { ResponsiveBar } from "@nivo/bar";
import "./MyBar.scss";

const MyResponsiveBar = ({ data }) => (
  <div className="myBar">
    <h2>Revenue of {new Date().getFullYear()}</h2>
    <ResponsiveBar
      data={data}
      keys={["revenue"]}
      indexBy="month"
      margin={{ top: 30, right: 10, bottom: 60, left: 60 }}
      padding={0.3}
      innerPadding={1}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "paired" }}
      borderRadius={3}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Months in " + new Date().getFullYear(),
        legendPosition: "middle",
        legendOffset: 50,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Revenue",
        legendPosition: "middle",
        legendOffset: -50,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
      theme={{
        text: {
          fontSize: "1em",
          fontFamily: "MediumCereal",
          color: "#000000",
        },
        annotations: { text: { fontSize: "1.5em", color: "black" } },
        legends: {
          text: {
            fontSize: "1em",
            fontFamily: "MediumCereal",
            color: "#000000 !important",
          },
        },
        axis: {
          legend: {
            text: {
              fontSize: "3em !important",
              color: "black",
            },
          },
        },
      }}
    />
  </div>
);

export default MyResponsiveBar;
