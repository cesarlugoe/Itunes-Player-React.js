import React from "react";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import HomePage from "./pages/HomePage";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });



describe("HomePage page testing", function() {

  it("renders SearchBar", function() {
    const wrapper = shallow(<HomePage />);
    const searchBar = wrapper.find(SearchBar);
    expect(searchBar).to.have.length(1);
  });

  it("It renders result list after search success", function() {
    const wrapper = shallow(<HomePage />);
    wrapper.setState({ searchSuccess: true })
    const list = wrapper.find(List);
    expect(list).to.have.length(1);
  });

  it("It renders 'No results came up from your search.' after failed search", function() {
    const wrapper = shallow(<HomePage />);
    wrapper.setState({ searchSuccess: false })
    const list = wrapper.find(List);
    expect(list).to.have.length(0);
  });

  it("It renders gif when searching", function() {
    const wrapper = shallow(<HomePage />);
    wrapper.setState({ isSearching: true })
    const gif = <img src="/5.gif" alt="gif" />;
    expect(wrapper.contains(gif)).to.equal(true);
  });
});
