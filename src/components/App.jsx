import { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export default function App() {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
    const { good, neutral, bad } = feedback;

    const onLeaveFeedback = event => {
        const { name } = event.target;
        setFeedback(prevFeedback => ({ ...prevFeedback, [name]: prevFeedback[name] + 1 }));
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const totalFeedback = countTotalFeedback();
        return ((good / totalFeedback) * 100).toFixed(2);
    };

    const options = Object.keys(feedback);
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={onLeaveFeedback}
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
