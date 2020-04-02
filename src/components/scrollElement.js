import React, { Component } from 'react';
import ScrollElement from './articleElement';

class ScrollArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };


    // Register an intersection observer
    this.observer = new IntersectionObserver(this.addArticles, {
      root: document.querySelectorAll('.scrollArea')[0],
      rootMargin: '0px',
      threshold: 1.0,
    });
  }



  render() {
    return (
      <section className='scrollArea'>
        <ScrollElement sentinel={true} />
        {this.populateArticles()}
        <ScrollElement sentinel={true} />
      </section>
    );
  }

  populateArticles() {
    let i = 0;

    return this.state.articles.map(() => {
      return <ScrollElement key={i} titleText={'Article ' + i++} />
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.updateObserver();
  }

  addArticles = () => {

    if (!this.first) {
      this.first = true;
      return;
    }

    console.log('addArticles');

    this.observer.unobserve(this.target);

    let { articles } = this.state;
    articles = articles.concat([1, 2, 3, 4, 5]);

    this.setState({ articles }, this.updateObserver);
  }

  updateObserver = () => {

    // TODO: do this for all 3
    const num = this.state.articles.length - 2;
    this.target = document.querySelector(`.article:nth-child(${num})`);
    this.first = false;

    console.log('updateObserver', num);

    this.observer.observe(this.target);
  }
}
// TODO: observe callback always fires on registration
// TODO: firing twice because the intersection will always happen twice
// TODO: still can't update the n-th element to observe

export default ScrollArea;