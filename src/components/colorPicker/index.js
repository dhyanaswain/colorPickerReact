import React from "react";
import "./index.css";
const classNames = require('classnames');

const ColorPicker = (props) => {
  const { colorPickerOptions, initialSelectedColor } = props;
  const [selectedColor, setSelectedColor] = React.useState(initialSelectedColor);

  return (
    <div>
      <div className="layout-row justify-content-center">
        <div className="card mt-75">
          <div className="canvas" data-testid="selectedColor" style={{ background: `${selectedColor}` }}>
            <p className="text-center mx-auto px-5">{selectedColor}</p>
          </div>
          <div className="card-actions">
            <div className="layout-row justify-content-center align-items-center" data-testid="colorPickerOptions">
              {colorPickerOptions.map((color, index) => {
                return (
                  <div
                    className={
                      classNames({
                        'color-box': true,
                        'mx-8': true,
                        'my-15': true,
                        'selected': selectedColor === color
                      })
                    }
                    style={{ background: `${color}` }}
                    key={color}
                    onClick={() => { setSelectedColor(colorPickerOptions[index]) }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;