import React, { Component } from 'react';

const TITLES = [
  'software engineer 💻',
  'stock investor 📈',
  'full stack developer 💻',
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ fadeIn: false });
    }, 2000);

    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex, fadeIn: true });

      this.timeout = setTimeout(() => {
        this.setState({ fadeIn: false });
      }, 2000);
    }, 3000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>
        I am a {title}.
      </p>
    );
  }
}

export default Title;
