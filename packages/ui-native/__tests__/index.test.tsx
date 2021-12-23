import "react-native";
import * as React from "react";
import { Button } from "../src/Button";
import renderer from "react-test-renderer";
describe("Test test", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
