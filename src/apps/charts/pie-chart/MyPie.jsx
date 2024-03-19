import { ResponsivePie } from "@nivo/pie";
import "./MyPie.scss";

const MyResponsivePie = ({ data, title, y }) => (
  <div className="usersBar">
    <h2>{title}</h2>
    <ResponsivePie
      data={data}
      margin={{ top: 0, right: 90, bottom: 50, left: 200 }}
      innerRadius={0}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={4}
      colors={{ scheme: "set3" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsStraightLength={12}
      arcLinkLabelsTextColor="#FFFFFF"
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.9)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#ffffff",
          rotation: -45,
          lineWidth: 6,
          spacing: 20,
        },
      ]}
      fill={[
        {
          match: {
            id: "Not Authenticated",
          },
          id: "dots",
        },
        {
          match: {
            id: "Verified",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: -120,
          translateY: y,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#000",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
      theme={{
        text: {
          fontSize: "1.2em",
          fontFamily: "BoldCereal",
        },
        annotations: { text: { fontSize: "1.5em", color: "black" } },
        legends: {
          text: {
            fontSize: "1.2em",
            fontFamily: "BoldCereal",
            color: "#000000 !important",
          },
        },
      }}
    />
  </div>
);

export default MyResponsivePie;
