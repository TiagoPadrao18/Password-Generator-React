import React, { useState} from "react";
import {
  Card,
  CheckBox,
  CheckboxMenu,
  Password,
  PasswordComp,
  Slider,
  Label,
  GenerateButton,
  RangeValues,
  RangeValue,
  StrenghtValue,
  Lenght,
} from "./styled";

import StrengthBar from "../StrengthBar";

const PasswordCard = () => {
  const [password, setPassword] = useState("");
  const [rangeValue, setRangeValue] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState([
    "transparent",
    "transparent",
    "transparent",
    "transparent",
  ]);

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let strength = 0;

    if (includeUpperCase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      strength++;
    }
    if (includeNumbers) {
      chars += "0123456789";
      strength++;
    }
    if (includeSymbols) {
      chars += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
      strength++;
    }
    if (includeLowerCase) {
      chars = "abcdefghijklmnopqrstuvwxyz";
      strength++;
    }

    const generatedPassword = randomPassword(rangeValue, chars);
    setPassword(generatedPassword);

    updateStrength(strength);
  };

  const randomPassword = (length, chars) => {
    let randomPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      randomPassword += chars[randomIndex];
    }
    return randomPassword;
  };

  const updateStrength = (strength) => {
    const newStrength = [
      "transparent",
      "transparent",
      "transparent",
      "transparent",
    ];
    for (let i = 0; i < strength; i++) {
      newStrength[i] = "orange";
    }
    setPasswordStrength(newStrength);
  };

  return (
    <>
      <PasswordComp>
        <Password>{password}</Password>
      </PasswordComp>
      <Card>
        <Lenght>Character Length</Lenght>
        <RangeValues>
          <Slider
            min={1}
            max={20}
            type="range"
            value={rangeValue}
            onChange={(e) => setRangeValue(parseInt(e.target.value))}
          />
          <RangeValue> {rangeValue}</RangeValue>
        </RangeValues>
        <CheckboxMenu>
          <Label>
            <CheckBox
              type="checkbox"
              checked={includeUpperCase}
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
            />
            Include Uppercase Letters
          </Label>
          <Label>
            <CheckBox
              type="checkbox"
              checked={includeLowerCase}
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
            />
            Include Lowercase Letters
          </Label>
          <Label>
            <CheckBox
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            Include Numbers
          </Label>
          <Label>
            <CheckBox
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            Include Symbols
          </Label>
        </CheckboxMenu>
        <GenerateButton
          onClick={generatePassword}
          type="button"
          value="GENERATE"
        />

        <RangeValues>
          <StrenghtValue>STRENGTH</StrenghtValue>
          {passwordStrength.map((color, index) => (
            <StrengthBar key={index} bg={color} />
          ))}
        </RangeValues>
      </Card>
    </>
  );
};

export default PasswordCard;
