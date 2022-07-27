import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  // const maxDataPoint = props.dataPoints.sort(
  //   (a, b) => a.dataPoint - b.dataPoint
  // )[0].dataPoint;
  const maxDataPoint = Math.max(
    ...props.dataPoints.map((point) => point.value)
  );
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxDataPoint}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
