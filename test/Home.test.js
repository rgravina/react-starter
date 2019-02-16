import React from "react"
import expect from "expect"
import {shallow} from "enzyme"
import Home from "../src/Home"

describe('Home', () => {
    it('renders a hello message', () => {
      const wrapper = shallow(<Home/>)

      expect(wrapper.text()).toEqual('Hello, World!')
    });
});