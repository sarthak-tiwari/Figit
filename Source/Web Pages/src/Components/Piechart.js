import React,{ Component } from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const pieOptions = {
  title: "",

  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 400,
    top: 10,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};
class PieChart extends Component {
  state = {
    chartImageURI: ""
  };
  render() {
    return (
      <div className="App">
        <Chart
          chartType="PieChart"
          data={[
            ["Team Members", "Commits per sprint"],
            ["Palak", 8],
            ["Bijaya", 2],
            ["Bharat", 4],
            ["Sarthak", 2],
            ["Shefali", 8],
            ["Yuti", 4]
          ]}
          options={pieOptions}
          graph_id="PieChart"
          width={"80%"}
          height={"400px"}
          legend_toggle
        />
      </div>
    );
  }
}
 export default PieChart;
