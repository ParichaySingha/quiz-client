import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { green, lightGreen, lime, teal, yellow } from "@mui/material/colors";
// import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import TimerIcon from "@mui/icons-material/Timer";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const GlassCard = styled(Card)(() => ({
  backdropFilter: "blur(10px)",
  background: "rgba(27, 24, 24, 0.91)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "#fff",
  minHeight: "200px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const testSteps = [
  {
    id: 1,
    title: "Test One",
    subtitle: "Aptitude & Skills",
    description: "8 sections · 380 MCQs · 45 min",
    type: "MCQ (A–E)",
    color: lightGreen[800], // Soft pastel green
  },
  {
    id: 2,
    title: "Test Two",
    subtitle: "Self Motivation",
    description: "1 section · 50 Questions · 20 min",
    type: "Yes/No",
    color: green[400], // Balanced green
  },
  {
    id: 3,
    title: "Test Three",
    subtitle: "SII / RIASEC",
    description: "6 sections · 120 Questions · 30 min",
    type: "Yes/No",
    color: lime[500], // Vibrant green-yellow
  },
  {
    id: 4,
    title: "Test Four",
    subtitle: "MBTI Personality",
    description: "4 sections · 96 Questions · 24 min",
    type: "Scale (1–5)",
    color: teal[300], // Cool bluish green
  },
];

const SatrtTests = () => {
  const navigate = useNavigate();
  const handleStartTest = (id) => {
    console.log(`Start Test ${id}`);
    // Hook your navigation logic here
  };

  return (
    <Box sx={{ px: 4, py: 6, minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" sx={{ mb: 5, fontWeight: "bold" }}>
          Begin Your Assessment Journey
        </Typography>
        <Button
          variant="contained"
          sx={{ mb: 5, fontWeight: "bold" }}
          onClick={() => {
            navigate("/test");
          }}
        >
          <PlayArrowIcon sx={{ mr: 1 }} /> Start
        </Button>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {testSteps.map((test, index) => (
          <React.Fragment key={test.id}>
            <Grid item xs={12} sm={6} md={3}>
              <GlassCard sx={{ borderLeft: `5px solid ${test.color}` }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {test.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ opacity: 0.8 }}
                  >
                    {test.subtitle}
                  </Typography>
                  <Divider
                    sx={{ my: 1, borderColor: "rgba(255,255,255,0.15)" }}
                  />
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    <AccessAlarmIcon fontSize="0.9rem" sx={{ mt: "1px" }} />{" "}
                    {test.description}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    📘 Type: {test.type}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleStartTest(test.id)}
                    fullWidth
                    sx={{
                      background: yellow[200],
                      color: "#000",
                      fontWeight: "bold",
                      "&:hover": { background: "#fff", color: "#000" },
                    }}
                  >
                    <ErrorOutlineIcon
                      sx={{
                        mr: 1,
                        fontSize: 14,
                      }}
                    />{" "}
                    Incomplete
                  </Button>
                </CardContent>
              </GlassCard>
            </Grid>

            {index !== testSteps.length - 1 && (
              <Grid
                item
                xs={12}
                sm={12}
                md="auto"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ChevronRightIcon
                  sx={{
                    fontSize: 40,
                    color: "#888",
                  }}
                />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default SatrtTests;
