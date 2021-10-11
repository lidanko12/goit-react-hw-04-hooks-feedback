
import './App.css';
import { useState } from 'react';
import Section from './Sections';
import Notification from './Notifications';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';


export default function App() {
  const initialState = {
    good: 0,
    bad: 0,
    neutral : 0,
  }
  const [feedback, setFeedback] = useState(initialState);
  const { good, neutral, bad } = feedback;

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const totalCount = countTotalFeedback();

    return Math.round((feedback.good * 100) / totalCount);
  };

  const onLeaveFeedback = (type) => {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1,
    });
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  const options = Object.keys(feedback);
   return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        {total > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </div>
    );
  }























// export default function App() {
//   const [good, setGood] = useState(0);
//   const [bad, setBad] = useState(0);
//   const [neutral, setNeutral] = useState(0);

  

//   // increment = value => () => {
//   //   this.setState(prevState => ({
//   //     [value]: prevState[value] + 1,
//   //   }));
//   // };
 
//   ;
//     const totalFeedback = good + bad + neutral;
//     const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);
//     const options = Object.keys(this.state);
  //   return (
  //     <div>
  //       <Section title={'Please leave feedback'}>
  //         <FeedbackOptions
  //           options={options}
  //           onLeaveFeedback={this.increment}
  //         ></FeedbackOptions>
  //       </Section>

  //       {totalFeedback > 0 ? (
  //         <Section title={'Statistics'}>
  //           <Statistics
  //             good={good}
  //             bad={bad}
  //             neutral={neutral}
  //             total={totalFeedback}
  //             positivePercentage={positiveFeedbackPercentage}
  //           ></Statistics>
  //         </Section>
  //       ) : (
  //         <Notification message={'No feedback given'} />
  //       )}
  //     </div>
  //   );
  // }
