import React, { Component } from "react";
import styled from "styled-components";

export default class InputProperty extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeEnum = this.handleChangeEnum.bind(this);
  }

  handleChange(event) {
    const { propertyUpdateFunction, name } = this.props;
    propertyUpdateFunction(name, event.target.value);
  }

  handleChangeNumber(event) {
    const { propertyUpdateFunction, name } = this.props;
    propertyUpdateFunction(name, parseInt(event.target.value, 10));
  }

  handleChangeEnum(event) {
    const { propertyUpdateFunction, name, enumOptions } = this.props;
    propertyUpdateFunction(name, enumOptions[event.target.value]);
  }

  render() {
    const { disabled, type, enumOptions } = this.props;

    return enumOptions ? (
      <SelectStyled disabled={disabled} onChange={this.handleChangeEnum}>
        <option value="" />
        {enumOptions.map((option, i) => (
          <option value={i}>{option.toString()}</option>
        ))}
      </SelectStyled>
    ) : type === "number" ? (
      <TextStyled disabled={disabled} type="number" onChange={this.handleChangeNumber} />
    ) : (
      <TextStyled disabled={disabled} type="text" onChange={this.handleChange} />
    );
  }
}

const SelectStyled = styled.select`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #b7b7b7;
  &:disabled {
    background: rgb(235, 235, 228);
  }
`;

const TextStyled = styled.input`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #b7b7b7;
`;
