import { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = event => {
        const stateName = event.target.name;
        this.setState(prevState => ({
            [stateName]: prevState[stateName] + 1,
        }));
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countPositiveFeedbackPercentage = () => {
        const totalFeedback = this.countTotalFeedback();
        return (this.state.good / totalFeedback) * 100;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {total !== 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </>
        );
    }
}
export default App;
