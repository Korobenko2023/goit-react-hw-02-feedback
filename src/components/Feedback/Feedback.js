import { Component } from "react";
import { SectionTitle } from "./SectionTitle";
import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from "./Notification";
import { Statistics } from "./Statistics";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }; 

  handleLeaveFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };
      
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state; 
      return good + neutral + bad;
      }; 

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
        
    if (total === 0) {
      return 0;
    }

    return ((good * 100) / total).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;  
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const options = {
      good: "Good",
      neutral: "Neutral",
      bad: "Bad",
    };  
    
    return (
        <>
           <SectionTitle title="Please leave feedback">   
              <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback} />                 
           </SectionTitle>                  
           <SectionTitle title="Statistics">
                {total ? (
                      <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positiveFeedback}
                      ></Statistics>
                    ) : (
                        <Notification message="There is no feedback" />
                )}                    
            </SectionTitle>                                                       
         </>
      );
  }   
} 




  // import { Component } from "react";
// import { TitleFeedback, ButtonFeedback, SpanFeedback} from "./Feedback.styled";

// class Button extends Component {
//     render() {
//       const { text, onUpdate } = this.props;
//       return <ButtonFeedback onClick={onUpdate}>{text}</ButtonFeedback>;
//     }
//   }
  
//   export class Basics extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//       };
  
//     updateA = () => {
//       this.setState(prevState => {
//         return {
//           good: prevState.good + 1,
//         };
//       });
//     };
  
//     updateB = () => {
//       this.setState(prevState => {
//         return {
//             neutral: prevState.neutral + 1,
//         };
//       });
//     };

//     updateC = () => {
//         this.setState(prevState => {
//           return {
//               bad: prevState.bad + 1,
//           };
//         });
//       };
    
//       countTotalFeedback = () => {
//         const { good, neutral, bad } = this.state; 
//           return good + neutral + bad;
//           }; 

//           countPositiveFeedbackPercentage = () => {
//             const { good } = this.state;
//             const total = this.countTotalFeedback();
        
//             if (total === 0) {
//               return 0;
//             }
        
//             return ((good * 100) / total).toFixed(0);
//           };

//       render() {
//               const { good, neutral, bad } = this.state;  
              
//               return (
//                 <section>
//                   <TitleFeedback>Please leave feedback</TitleFeedback>
//                   <Button text="Good" onUpdate={this.updateA} />
//                   <Button text="Neutral" onUpdate={this.updateB} />
//                   <Button text="Bad" onUpdate={this.updateC} />
//                   <TitleFeedback>Statistics</TitleFeedback>
//                   <>
//                     {good > 0 && <p>Good : <SpanFeedback>{good}</SpanFeedback></p>}
//                     {neutral > 0 && <p>Neutral : <SpanFeedback>{neutral}</SpanFeedback></p>}
//                     {bad > 0 && <p>Bad : <SpanFeedback>{bad}</SpanFeedback></p>}
//                     <p>Total : <SpanFeedback>{this.countTotalFeedback()}</SpanFeedback></p>
//                     <p>Positive feedback : <SpanFeedback>{this.countPositiveFeedbackPercentage()}%</SpanFeedback></p>
//                   </>                                     
//                 </section>
//                 );
//             }   
//   } 



  







