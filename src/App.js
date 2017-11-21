import React, { Component } from "react";
import { Pixelify } from "react-pixelify";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";
const doom = require("./doomguy.png");
const fixit = require("./fixit.jpg");
class App extends Component {
  state = {
    pixelSize: 8,
    centered: true,
    fillTransparencyColor: "white",
    width: 250,
    height: 250
  };

  render() {
    return (
      <div className="App">
        <Grid fluid>
          <Row>
            <Col xs={12} md={12}>
              <h1>React Pixelify</h1>
              <p>Two different usages sharing the same setup</p>
              <ul>
                <li>
                  <p>
                    Turning Doom Guy into the <b>real</b> Doom Guy
                  </p>
                </li>
                <li>
                  <p>
                    Fixing the already <b>fixed</b> painting
                  </p>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={12}>
              <p>
                <b>Change Properties</b>
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th colSpan="2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <pre>centered</pre>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.state.centered}
                        onChange={e =>
                          this.setState({ centered: e.target.checked })}
                      />
                    </td>
                    <td>
                      <pre>{JSON.stringify(this.state.centered)}</pre>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <pre>pixelSize</pre>
                    </td>
                    <td>
                      <input
                        type="range"
                        min={5}
                        max={50}
                        step={1}
                        defaultValue={this.state.pixelSize}
                        onMouseUp={e =>
                          this.setState({
                            pixelSize: parseInt(e.target.value, 10)
                          })}
                      />
                    </td>
                    <td>
                      <pre>{this.state.pixelSize}</pre>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <pre>fillTransparencyColor</pre>
                    </td>
                    <td>
                      <select
                        onChange={e =>
                          this.setState({
                            fillTransparencyColor: e.target.value
                          })}
                        value={this.state.fillTransparencyColor}
                      >
                        <option value="white">White</option>
                        <option value="gray">Gray</option>
                        <option value="black">Black</option>
                      </select>
                    </td>
                    <td>
                      <pre>{this.state.fillTransparencyColor}</pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col xs={12} md={12}>
              <p>
                <b>Code running on both examples</b>
              </p>
              <pre className="code">
                {`<Pixelify
  src={src}
  width={${this.state.width}}
  height={${this.state.height}}
  centered={${this.state.centered}}
  pixelSize={${this.state.pixelSize}}
  fillTransparencyColor={${this.state.fillTransparencyColor}}
/>`}
              </pre>
            </Col>
            <Col xs={12} md={3}>
              <p>
                <b>Original Image</b>
              </p>
              <Pixelify src={doom} width={250} height={250} />
            </Col>
            <Col xs={12} md={3}>
              <p>
                <b>Pixelated Image</b>
              </p>
              <Pixelify
                src={doom}
                width={250}
                height={250}
                centered={this.state.centered}
                pixelSize={this.state.pixelSize}
                fillTransparencyColor={this.state.fillTransparencyColor}
              />
            </Col>
            <Col xs={12} md={3}>
              <p>
                <b>Original Image</b>
              </p>
              <Pixelify src={fixit} width={250} height={250} />
            </Col>
            <Col xs={12} md={3}>
              <p>
                <b>Pixelated Image</b>
              </p>
              <Pixelify
                src={fixit}
                width={250}
                height={250}
                centered={this.state.centered}
                pixelSize={this.state.pixelSize}
                fillTransparencyColor={this.state.fillTransparencyColor}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
