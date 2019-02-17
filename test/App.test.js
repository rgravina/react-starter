import React from "react"
import expect from "expect"
import {shallow} from "enzyme"
import App from "../src/App"

describe('App', () => {
    it('renders a greeting', () => {
      const wrapper = shallow(<App/>)

      expect(wrapper.text()).toEqual('Hello, World!')
    });
});