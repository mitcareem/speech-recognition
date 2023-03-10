import { useState } from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Text from "./components/Text";
import Textarea from "./components/Textarea";
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";
import Box from "./components/Box";

const App = () => {
  const [input1TextValue, setInput1TextValue] = useState("");
  const [input2TextValue, setInput2TextValue] = useState("");

  const [isListening, setIsListening] = useState(false);

  const { transcript } = useSpeechRecognition({
    continuous: true,
  });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    alert("Your browser does not support speech recognition.");
  }


  // for start listening
  const handleListing = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  // for stop listening
  const stopHandleListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  return (
    <Toolbar mt={"50px"} style={{ justifyContent: "center" }}>
      <Box height={"100vh"} width={"620px"}>
        <Text style={{ lineHeight: "1.4375em" }}>Describe your image</Text>

        {/* upper text area */}
        <Textarea
          height={"140px"}
          width={"100%"}
          resize={"none"}
          backgroundColor={"#bbc5b6"}
          outline={"none"}
          border={"none"}
          borderRadius={"5px"}
          mt={"10px"}
          pt={"10px"}
          pr={"10px"}
          pb={"10px"}
          pl={"10px"}
          fontSize={"1.15em"}
          placeholder={"Portrait of a gardener in a greenhouse"}
          value={input1TextValue || transcript}
          onChange={(event) => {
            setInput1TextValue(event.target.value);
          }}
        />

        <Text mt={"10px"}>Negative prompt</Text>


        {/* lower text area */}
        <Textarea
          height={"60px"}
          width={"100%"}
          resize={"none"}
          backgroundColor={"#bbc5b6"}
          outline={"none"}
          border={"none"}
          borderRadius={"5px"}
          mt={"10px"}
          pt={"10px"}
          pr={"10px"}
          pb={"10px"}
          pl={"10px"}
          fontSize={"1.15em"}
          value={input2TextValue}
          onChange={(event) => {
            setInput2TextValue(event.target.value);
          }}
          placeholder={"Describe things to exclude"}
        />


        <Toolbar width={"100%"} style={{ justifyContent: "center" }}>
          <Text mt={"15px"} style={{ lineHeight: "1.4375em" }}>
            or
          </Text>
        </Toolbar>

        <Toolbar width={"100%"} mt={"15px"}>
          {/* Random button */}
          <Button
            height={"40px"}
            width={"33.33%"}
            border={"1px solid black"}
            hover={"#e4e4e4"}
            style={{
              borderRight: "none",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
              fontWeight: "bold",
            }}
          >
            Random
          </Button>

          {/* Template button */}
          <Button
            height={"40px"}
            width={"33.33%"}
            border={"1px solid black"}
            hover={"#e4e4e4"}
            style={{ borderRight: "none", fontWeight: "bold" }}
          >
            Template
          </Button>

          {/* speak and stop button rendered conditionally */}
          {isListening ? (
            <Button
              height={"40px"}
              width={"33.33%"}
              border={"1px solid red"}
              hover={"#e4e4e4"}
              style={{
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
                fontWeight: "bold",
                color: "red",
              }}
              onClick={stopHandleListening}
            >
              Stop
            </Button>
          ) : (
            <Button
              height={"40px"}
              width={"33.33%"}
              border={"1px solid black"}
              hover={"#e4e4e4"}
              style={{
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
                fontWeight: "bold",
              }}
              onClick={handleListing}
            >
              Speak
            </Button>
          )}

          {/*  end of speak and stop button */}
        </Toolbar>

        <Toolbar
          width={"100%"}
          mt={"20px"}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {/* Generate button */}
          <Button
            height={"40px"}
            width={"100%"}
            border={"1px solid black"}
            hover={"#4f0079"}
            backgroundColor={"#240032"}
            fontColor={"white"}
            fontSize={"1em"}
            borderRadius={"4px"}
            style={{ fontWeight: "bold" }}
          >
            Generate
          </Button>
        </Toolbar>
      </Box>
    </Toolbar>
  );
};

export default App;
