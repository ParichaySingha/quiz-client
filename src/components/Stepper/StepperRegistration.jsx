import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
// import Divider from "@mui/material/Divider";
import LinearProgress from "@mui/material/LinearProgress";
import { useTheme, useMediaQuery, Checkbox } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useUI } from "../../context/UIContext";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const steps = ["Personal Details", "Educational Details", "Consent & Submit"];

const personalQuestions = [
  { label: "First Name", type: "text", required: true },
  { label: "Last Name", type: "text", required: true },
  { label: "Email Address", type: "text", required: true },
  { label: "Date of Birth", type: "date", required: true },
  {
    label: "Gender",
    type: "radio",
    options: ["Male", "Female", "Other"],
    required: true,
  },
  { label: "Phone Number", type: "tel", required: true },
  {
    label: "Is your Whatsapp number same as above?",
    type: "radio",
    required: true,
    options: ["Yes", "No"],
  },
  {
    label: "Do you have any work experience?",
    type: "radio",
    required: true,
    options: ["Yes", "No"],
  },
  {
    label: "Please specify your work experience",
    type: "radio",
    required: true,
    options: ["Less than 1 year", "1-2 years", "Above 2 years"],
  },
  {
    label: "Please choose your religion",
    type: "radio",
    required: true,
    options: ["Hinduism", "Islam", "Christianity", "Sikhism"],
  },
  {
    label: "Please choose your category",
    type: "radio",
    required: true,
    options: ["General", "OBC", "SC", "ST"],
  },
  { label: "Permanent Address", type: "text", required: true },
  { label: "Address line 2 (Optional)", type: "text", required: true },
  { label: "Pincode", type: "tel", required: true },
  { label: "Town/City", type: "text", required: true },
  { label: "State", type: "text", required: true },
  { label: "Guardian's name", type: "text", required: true },
  { label: "Guardian's phone number", type: "tel", required: true },
  {
    label: "Guardian's highest educational qualification",
    type: "radio",
    required: true,
    options: ["Post Graduate", "Graduate", "Not a Graduate"],
  },
  {
    label: "Relation with guardian?",
    type: "radio",
    options: ["Father", "Mother", "Elder Brother", "Elder Sister", "Others"],
    required: true,
  },
  {
    label: "Please choose your Guardian's occupation",
    type: "radio",
    required: true,
    options: [
      "Govt Job",
      "Private - Full Time",
      "Private - Part Time",
      "Self Employed",
      "Unemployed",
      "Retired",
    ],
  },
  {
    label: "Please select the annual income of your family",
    type: "radio",
    required: true,
    options: ["Below 50000", "50k-2LPA", "2LPA-5LPA", "Above 5LPA"],
  },
  {
    label: "Which of the following do you have in your house?",
    type: "radio",
    required: true,
    options: ["4 wheeler", "2 wheeler", "Air Conditioner", "None"],
  },
  {
    label: "Do you or your parents hold a credit card?",
    type: "radio",
    required: true,
    options: ["Yes", "No"],
  },
  {
    label: "Do you or your parents hold a Bank account?",
    type: "radio",
    required: true,
    options: ["Yes", "No"],
  },
  {
    label: "What is your accommodation type?",
    type: "radio",
    required: true,
    options: ["Self-Owned", "Rented"],
  },
  {
    label: "Do you need hostel facility?",
    type: "radio",
    required: true,
    options: ["Yes", "No"],
  },
  {
    label:
      "Please mention the distance of your home from the emversity center (Kms).",
    type: "radio",
    required: true,
    options: ["5", "10", "20", "40"],
  },
  {
    label: "Which other courses are you considering?",
    type: "text",
    required: true,
  },
  {
    label: "Which other colleges are you considering?",
    type: "text",
    required: true,
  },
  {
    label: "How will you fund your education?",
    type: "radio",
    required: true,
    options: ["Self", "Loan"],
  },
];

console.log(personalQuestions.length);

const educationQuestions = [
  {
    label: "Please choose your highest educational qualification",
    type: "radio",
    required: true,
    options: ["12th", "Bachelors", "Diploma", "Advance Diploma", "Other"],
  },
  { label: "Year of passing 12th", type: "text", required: true },
  { label: "Percentage in 12th", type: "text", required: true },
  {
    label: "Which board did you complete your 12th from?",
    type: "radio",
    required: true,
    options: ["CBSE", "ICSE", "State Board", "Other"],
  },
  {
    label: "What was your stream in class 12th?",
    type: "radio",
    required: true,
    options: ["PCB", "PCM", "PCMB", "Humanities", "Commerce"],
  },
  {
    label: "Did you appear for any Entrance exam?",
    type: "radio",
    required: true,
    options: ["JEE", "NEET-UG", "CUET-UG", "State-CET", "None of these"],
  },
  { label: "School Name", type: "text", required: true },
  { label: "School Address", type: "text", required: true },
  { label: "School Pincode", type: "text", required: true },
  { label: "School Fees Per Month", type: "text", required: true },
  {
    label: "School Type",
    type: "radio",
    required: true,
    options: [
      "Private",
      "Government",
      "Open School",
      "PU",
      "Inter College",
      "Polytechnic",
      "ITI",
    ],
  },
  {
    label: "How did you hear about us?",
    type: "radio",
    required: true,
    options: ["Google Search", "Instagram", "Friend"],
  },
];

const finalConsent = [
  {
    label: "Confirm1",
    type: "checkbox",
    required: true,
    options: [
      "I confirm that the information provided is true to the best of my knowledge.",
    ],
  },
  {
    label: "Confirm2",
    type: "checkbox",
    required: true,
    options: [
      "I agree to be contacted via phone or email regarding my application.",
    ],
  },
];

export default function StepperRegistration() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { showSnackbar } = useUI();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = React.useState({});

  const [activeStep, setActiveStep] = React.useState(0);
  const [questionIndex, setQuestionIndex] = React.useState(0);

  const questions =
    activeStep === 2
      ? finalConsent
      : activeStep === 0
      ? personalQuestions
      : educationQuestions;
  const totalQuestions = questions.length;
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  const handleNextQuestion = () => {
    const currentQuestions = questions.slice(questionIndex, questionIndex + 2);
    const missingFields = currentQuestions.filter(
      (question) => question.required && !formData[question.label]
    );

    if (missingFields.length > 0) {
      // Show error feedback (e.g., snackbar or alert)
      showSnackbar(
        `Please fill all required fields: ${missingFields
          .map((q) => q.label)
          .join(", ")}`,
        "error"
      );
      return; // Stop the user from proceeding
    }

    const isLastStep = activeStep === steps.length - 1;
    const isLastQuestion = questionIndex + 2 >= totalQuestions;

    if (isLastStep && isLastQuestion) {
      navigate("/testAll");
      // Show snackbar instead of moving forward
      showSnackbar("Registration Completed!", "success");
      return;
    }
    if (questionIndex + 2 < totalQuestions) {
      setQuestionIndex((prev) => prev + 2);
    } else {
      setQuestionIndex(0);
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBackQuestion = () => {
    if (questionIndex - 2 >= 0) {
      setQuestionIndex((prev) => prev - 2);
    } else if (activeStep > 0) {
      const previousStep = activeStep - 1;
      const previousQuestions =
        previousStep === 0 ? personalQuestions : educationQuestions;

      setActiveStep(previousStep);
      previousQuestions.length % 2 !== 0
        ? setQuestionIndex(Math.max(previousQuestions.length - 1, 0))
        : setQuestionIndex(Math.max(previousQuestions.length - 2, 0));
    }
  };

  const currentQuestions = questions.slice(questionIndex, questionIndex + 2);

  const renderField = (question) => {
    if (!question) return null;

    const value = formData[question.label] || "";

    const handleChange = (e, val) => {
      console.log(e, val);
      if (question.type === "checkbox") {
        setFormData((prev) => ({
          ...prev,
          [question.label]: val,
        }));
        return;
      }
      setFormData((prev) => ({
        ...prev,
        [question.label]: e.target.value,
      }));
    };

    switch (question.type) {
      case "checkbox":
        return (
          <FormControl
            component="fieldset"
            sx={{ mb: 2 }}
            error={question.required && (!value || value.length === 0)} // Show error if required and no value
          >
            <Typography>
              {question.label}
              {question.required && (
                <span style={{ color: "red", marginLeft: 4 }}>*</span>
              )}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
              {question.options.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={value.includes(option)} // Check if the option is selected
                      onChange={(e) => {
                        const newValue = value.includes(option)
                          ? value.filter((item) => item !== option) // Remove if unchecked
                          : [...value, option]; // Add if checked
                        handleChange(e, newValue);
                      }}
                    />
                  }
                  label={option}
                />
              ))}
            </Box>
            {question.required && (!value || value.length === 0) && (
              <Typography color="error" variant="caption">
                At least one option must be selected.
              </Typography>
            )}
          </FormControl>
        );
      case "date":
        return (
          <FormControl sx={{ mb: 2 }}>
            <Typography>
              {question.label}
              {question.required && (
                <span style={{ color: "red", marginLeft: 4 }}>*</span>
              )}
            </Typography>
            <TextField
              type="date"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ mt: 1 }}
              value={value}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        );
      case "tel":
        return (
          <FormControl sx={{ mb: 2 }}>
            <Typography>
              {question.label}
              {question.required && (
                <span style={{ color: "red", marginLeft: 4 }}>*</span>
              )}
            </Typography>
            <TextField
              type="tel"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ mt: 1 }}
              value={value}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </FormControl>
        );

      case "text":
        return (
          <FormControl sx={{ mb: 2 }}>
            <Typography sx={{ mb: 1 }}>
              {question.label}
              {question.required && <span style={{ color: "red" }}>*</span>}
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              sx={{ mb: 2, mt: 1 }}
              value={value}
              onChange={handleChange}
              placeholder="Enter details"
            />
          </FormControl>
        );

      case "radio":
        return (
          <FormControl
            sx={{ mb: 2 }}
            error={question.required && !value} // Show error if required and no value
          >
            <FormLabel>
              {question.label}
              {question.required && (
                <span style={{ color: "red", marginLeft: 4 }}>*</span>
              )}
            </FormLabel>
            <RadioGroup row value={value} onChange={handleChange}>
              {question.options.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio sx={{ display: "none" }} />}
                  label={option}
                  sx={{
                    border: "1px solid",
                    borderColor: "primary.main",
                    borderBottomWidth: "4px",
                    borderRadius: 2,
                    m: 1,
                    p: 1,
                    pl: 3,
                    pr: 3,
                    cursor: "pointer",
                    backgroundColor:
                      value === option ? "lightgreen" : "grey.100",
                    color: value === option ? "darkgreen" : "text.primary",
                    fontWeight: value === option ? "bold" : "normal",
                    "&:hover": {
                      backgroundColor:
                        value === option ? "lightgreen" : "grey.200",
                    },
                  }}
                />
              ))}
            </RadioGroup>
            {question.required && !value && (
              <Typography color="error" variant="caption">
                Please select an option.
              </Typography>
            )}
          </FormControl>
        );
      case "select":
        return (
          <FormControl fullWidth variant="standard" size="small" sx={{ mb: 2 }}>
            <FormLabel>{question.label}</FormLabel>
            <Select value={value} onChange={handleChange}>
              {question.options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      default:
        return null;
    }
  };

  const handleSubmit = () => {
    try {
      // Show loader or feedback to the user
      showSnackbar("Submitting your registration data...", "info");

      // Simulate successful submission
      setTimeout(() => {
        showSnackbar("Registration Completed Successfully!", "success");
        navigate("/testAll"); // Navigate to the next page
      }, 1000); // Simulate a delay for user feedback
    } catch (error) {
      // Handle unexpected errors (if any)
      console.error("Error during registration:", error);
      showSnackbar("An unexpected error occurred. Please try again.", "error");
    }
  };

  // const renderField = (question) => {
  //   if (!question) return null;

  //   switch (question.type) {
  //     case 'text':

  //       return (<FormControl sx={{ mb: 2 }}>
  //         <FormLabel>{question.label}</FormLabel>
  //         <TextField variant="standard" fullWidth size="small" sx={{ mb: 2 }} />
  //       </FormControl>);
  //     case 'radio':
  //       return (
  //         <FormControl sx={{ mb: 2 }}>
  //           <FormLabel>{question.label}</FormLabel>
  //           <RadioGroup row>
  //             {question.options.map((option) => (
  //               <FormControlLabel key={option} value={option}  sx={{backgroundColor: 'primary', p:1, m:1,  borderRadius: 2, borderStyle: 'solid', borderWidth: 2, borderColor: 'primary.main'}}  control={<Radio />} label={option} />
  //             ))}
  //           </RadioGroup>
  //         </FormControl>
  //       );
  //     case 'select':
  //       return (
  //         <FormControl fullWidth variant="standard" size="small" sx={{ mb: 2 }}>
  //           <FormLabel>{question.label}</FormLabel>
  //           <Select defaultValue="">
  //             {question.options.map((option) => (
  //               <MenuItem key={option} value={option}>{option}</MenuItem>
  //             ))}
  //           </Select>
  //         </FormControl>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  return (
    <Box
      sx={{
        width: "100%",
        height: "90%", // full height
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row", // horizontal layout
      }}
    >
      {/* Stepper section */}
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "30%",
          borderRight: !isSmallScreen && "1px solid #ddd",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
        }}
      >
        <Stepper
          activeStep={activeStep}
          orientation={isSmallScreen ? "horizontal" : "vertical"}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Form section */}
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "70%",
          height: isSmallScreen ? "70%" : "100%", // Ensure the form takes full height
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative", // So that the buttons can be positioned at the bottom
        }}
      >
        {/* Progress bar at the top */}
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            width: "100%",
            position: "sticky",
            top: 0,
            zIndex: 1, // Make sure the progress bar stays above other content
            mb: 2,
          }}
        />

        {/* Scrollable question section */}
        <Box
          sx={{
            width: "100%",
            flex: 1, // This will make the question section take up the available space
            overflowY: "auto", // Enable scrolling
            paddingBottom: "60px", // Prevent content from being hidden behind the buttons
            p: 2,
          }}
        >
          <Box sx={{ flex: 1, width: "100%" }}>
            {renderField(currentQuestions[0])}
          </Box>
          <Box sx={{ flex: 1, width: "100%" }}>
            {renderField(currentQuestions[1])}
          </Box>
        </Box>

        {/* Buttons at the bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "sticky",
            width: "100%",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "16px",
            // backgroundColor: 'white',
            borderTop: "1px solid #ddd",
            zIndex: 2, // Ensure buttons stay above other content
          }}
        >
          <Button
            variant="outlined"
            onClick={handleBackQuestion}
            disabled={activeStep === 0 && questionIndex === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={
              activeStep === steps.length - 1 &&
              questionIndex + 2 >= totalQuestions
                ? handleSubmit
                : handleNextQuestion
            }
          >
            {activeStep === steps.length - 1 &&
            questionIndex + 2 >= totalQuestions
              ? "Finish"
              : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
