import React, { PureComponent } from 'react';
import Languages from './Languages';
import Tools from './Tools';
import { Button } from 'react-bootstrap';

class SkillBox extends PureComponent {
  state = {
    language: true,
    tool: false,
  };

  showLanguage = () => {
    this.setState({ language: true, tool: false });
  };

  showTool = () => {
    this.setState({ tool: true, language: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.language ? <Languages /> : null}
        {this.state.tool ? <Tools /> : null}

        <Button
          style={{ backgroundColor: '#056325', borderColor: '#056325' }}
          className="toggleSkillButton"
          onClick={this.showLanguage}
          active={this.state.language}
        >
          Languages
        </Button>
        <Button
          style={{ backgroundColor: '#0f5ba8', borderColor: '#0f5ba8' }}
          className="toggleSkillButton"
          onClick={this.showTool}
          active={this.state.tool}
        >
          Knowledge
        </Button>
        <hr />
      </React.Fragment>
    );
  }
}
export default SkillBox;
