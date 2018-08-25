import Enzyme = require("enzyme");
import { mount } from "enzyme";
import Adapter = require("enzyme-adapter-react-16");
import * as React from "react";
import {Hello, HelloProps} from "./Hello";

​
Enzyme.configure({ adapter: new Adapter() });
​
function setup() {
  const props: HelloProps = {
    compiler: "TypeScript",
    framework: "React",
  };
​
  const enzymeWrapper = mount(<Hello {...props} />);
​
  return {
    enzymeWrapper,
    props,
  };
}
describe("components", () => {
  describe("Hello", () => {
    it("should render self and subcomponents", () => {
      const { enzymeWrapper } = setup();
​
      expect(enzymeWrapper.find("h1").text()).toBe("Hello from TypeScript and React!");
    });
  });
});
