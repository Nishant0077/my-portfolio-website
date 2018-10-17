import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    /*an if statement for each project */
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>This is Pokemon Project</h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Unity Project</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          {/*a tab for each project */}
          <Tab>Pokemon Genetic algorithm</Tab>
          <Tab>Unity Handwriting recognition</Tab>
        </Tabs>
        <section className="projects-grid">{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default Projects;
