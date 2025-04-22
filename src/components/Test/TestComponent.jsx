import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
} from "@mui/material";
import SectionOverview from "./Section/SectionOverview";
import Timer from "./Section/Timer";
import QuestionMainSection from "./Section/QuestionMainSection";
import QuestionsMatrixSection from "./Section/QuestionsMatrixSection";

//child component
const TestComponent = ({ testData }) => {
  const navigate = useNavigate();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(testData[0].timeLimit);
  const [answers, setAnswers] = useState({});

  const currentSection = testData[currentSectionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];

  useEffect(() => {
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setRemainingTime(testData[0].timeLimit); // Reset remaining time to the first section's time limit
    setAnswers({}); // Reset answers when testData changes
  }, [testData]);

  useEffect(() => {
    if (remainingTime === 0) {
      moveToNextSection();
      return;
    }

    const timer = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  // const moveToNextSection = () => {
  //   if (currentSectionIndex < testData.length - 1) {
  //     setCurrentSectionIndex((prev) => prev + 1);
  //     setCurrentQuestionIndex(0);
  //     setRemainingTime(testData[currentSectionIndex + 1].timeLimit);
  //   } else {
  //     // Redirect to next test
  //     const nextTestId = currentSection.nextTestId;
  //     if (nextTestId) {
  //       navigate(`/test/${nextTestId}`);
  //       if (nextTestId) {
  //         navigate(`/testTwo/${nextTestId}`);
  //       }
  //     } else {
  //       alert("All tests completed!");
  //     }
  //   }
  // };

  const moveToNextSection = () => {
    if (currentSectionIndex < testData.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
      setCurrentQuestionIndex(0);
      setRemainingTime(testData[currentSectionIndex + 1].timeLimit);
    } else {
      // Redirect to testTwo
      navigate("/completionScreen");
    }
  };

  const handleAnswerChange = (sectionIndex, questionIndex, optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [sectionIndex]: {
        ...prev[sectionIndex],
        [questionIndex]: optionId,
      },
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const getQuestionStatus = (index) => {
    if (index === currentQuestionIndex) return "current";
    if (answers[currentSectionIndex]?.[index]) return "answered";
    return "unanswered";
  };

  return (
    <Box>
      {/* Section Stepper Navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stepper
          activeStep={currentSectionIndex}
          alternativeLabel
          orientation="horizontal"
        >
          {testData.map((section, index) => (
            <Step key={section.title}>
              <StepLabel
                sx={{
                  color: index === currentSectionIndex ? "blue" : "grey",
                  fontWeight: index === currentSectionIndex ? "bold" : "normal",
                  fontSize: "10px",
                }}
              >
                {section.title}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Timer
          remainingTime={remainingTime}
          timeLimit={currentSection.timeLimit}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        {/* Section Overview */}
        <SectionOverview
          currentSection={currentSection}
          currentSectionIndex={currentSectionIndex}
          totalSectionLenght={testData.length}
        />
        {/* Time Remaining */}
      </Box>

      {/* Progress Bar: Section Progress */}
      <LinearProgress
        variant="determinate"
        value={(currentQuestionIndex / currentSection.questions.length) * 100}
        sx={{ marginTop: 2, marginBottom: 2 }}
      />

      <Box
        sx={{
          display: "flex",
          maxHeight: 400,
          overflowY: "auto",
          p: 2,
        }}
      >
        {/* Question Details */}
        <Box sx={{ flex: "0 0 70%", pr: 2 }}>
          {/* Display Question Image */}
          {currentQuestion.image && (
            <img
              src={currentQuestion.image}
              alt={`Question ${currentQuestionIndex + 1}`}
              style={{
                width: "100%",
                maxHeight: "100px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
          )}
          <QuestionMainSection
            currentSectionIndex={currentSectionIndex}
            currentQuestionIndex={currentQuestionIndex}
            answers={answers}
            currentQuestion={currentQuestion}
            handleAnswerChange={handleAnswerChange}
            totalQuestionInCurrentSection={currentSection.questions.length}
          />
        </Box>

        {/* Question Matrix */}
        <Box
          sx={{
            flex: "0 0 30%",
            p: 5,
            pt: 1,
            borderStyle: "solid",
            borderWidth: 2,
            borderRadius: 1,
            borderColor: "primary.light",
            height: 280,
            maxHeight: 280,
            overflowY: "auto",
          }}
        >
          <Typography align="center" variant="h6" gutterBottom>
            Questions
          </Typography>
          <QuestionsMatrixSection
            getQuestionStatus={getQuestionStatus}
            currentSection={currentSection}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
        </Box>
      </Box>

      {/* Navigation Buttons */}
      <Box
        mt={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handlePrevQuestion}
          disabled={remainingTime === 0 || currentQuestionIndex === 0}
        >
          Previous Question
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNextQuestion}
          disabled={
            remainingTime === 0 ||
            currentQuestionIndex === currentSection.questions.length - 1
          }
        >
          Next Question
        </Button>
      </Box>

      {/* Next Section Button */}
      {remainingTime === 0 && (
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={moveToNextSection}
          >
            Next Section
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default TestComponent;
