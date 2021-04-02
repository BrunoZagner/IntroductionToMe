import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currScroll: 0,
            stepSize: 7,

            scrollIndex: 0,
            scrollIndexMin: 0,
            scrollIndexMax: 0,
            scrollTimeout: 500,

            currPage: "landing_page",
            scheduledPage: null,

            scrollBlock: false,
            scrollForward: true,
            scrollBackward: true,

            unblockEvent: () => { },
        }
    }

    clampIndex = (index) => {
        return Math.min(Math.max(index, this.state.scrollIndexMin), this.state.scrollIndexMax);
    }

    handleScroll = (event) => {
        if (!this.state.scrollBlock) {
            if (this.state.scrollForward && event.deltaY > 0) {
                this.setState({ currScroll: this.state.currScroll + 1 });

                if (this.state.currScroll >= this.state.stepSize) this.setState({
                    scrollBlock: true,
                    currScroll: 0,
                    scrollIndex: this.clampIndex(this.state.scrollIndex + 1)
                });
            }

            if (this.state.scrollBackward && event.deltaY < 0) {
                this.setState({ currScroll: this.state.currScroll - 1 });

                if (this.state.currScroll <= -this.state.stepSize) this.setState({
                    scrollBlock: true,
                    currScroll: 0,
                    scrollIndex: this.clampIndex(this.state.scrollIndex - 1)
                });

            }

            if (this.state.scrollBlock) setTimeout(() => {
                this.setState({ scrollBlock: false });
                this.state.unblockEvent();
            }, this.state.scrollTimeout);
        }
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    setPage = (nextPage) => this.setState({ currPage: nextPage });

    setScrollRange = (min, max) => {
        this.setState({ scrollIndexMin: min, scrollIndexMax: max, scrollIndex: min });
    }

    render() {
        switch (this.state.currPage) {
            case "landing_page": {
                return <LandingPage
                    setUnblockEvent={(target) => this.state.unblockEvent = target}
                    scrollIndex={this.state.scrollIndex}
                    setPage={this.setPage}
                    setScrollRange={this.setScrollRange}
                />
            }
            case "test": { return <p>test</p> }
            default: { return <p>uh oh</p> }
        }
    }
}

export default App;
