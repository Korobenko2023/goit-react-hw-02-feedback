import { ButtonFeedback } from "./FeedbackOptions.styled";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (    
      Object.keys(options).map((option) => (
        <ButtonFeedback  type="button" key={option} onClick={() => onLeaveFeedback(option)}>
          {options[option]}
        </ButtonFeedback>
      ))
    
  );




