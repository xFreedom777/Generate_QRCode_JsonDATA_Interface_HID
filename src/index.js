import React from "react";
import { render } from "react-dom";
import { QRCode } from "react-qr-svg";

const styles = {
  root: {
    fontFamily: "sans-serif",
  },
  h1: {
    textAlign: "center",
  },
  qrcode: {
    textAlign: "center",
  },
};

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.qrcode}>
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify({
              id: "1193",
              qty: "1711",
              "POSITION01(mm)": "0000",
              "POSITION02(mm)": "0200",
              "POSITION03(mm)": "0750",
              "POSITION04(mm)": "1500",
              "SETPOINT01(BAR)": "200.00",
              "SETPOINT02(RESERVE)": "121.30",
              MODEL: "TEST-02",
            })}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
