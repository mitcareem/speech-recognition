import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import Text from "./components/Text";
import Textarea from "./components/Textarea";
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";
import Box from "./components/Box";

const App = () => {
  const { transcript } = useSpeechRecognition({
    continuous: true,
  });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Your browser does not support speech recognition.</p>;
  }





  return (
    <Toolbar mt={"50px"} style={{ justifyContent: "center" }}>
      <Box height={"100vh"} width={"620px"}>
        <Text style={{ lineHeight: "1.4375em" }}>Describe your image</Text>
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
        />
        <Text mt={"10px"}>Negative prompt</Text>
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
          placeholder={"Describe things to exclude"}
        />
        <Toolbar width={"100%"} style={{ justifyContent: "center" }}>
          <Text mt={"15px"} style={{ lineHeight: "1.4375em" }}>
            or
          </Text>
        </Toolbar>
        <Toolbar width={"100%"} mt={"15px"}>
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
          <Button
            height={"40px"}
            width={"33.33%"}
            border={"1px solid black"}
            hover={"#e4e4e4"}
            style={{ borderRight: "none", fontWeight: "bold" }}
          >
            Template
          </Button>
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
            onClick={SpeechRecognition.startListening}

          >
            Speak
          </Button>
        </Toolbar>

        <Toolbar
          width={"100%"}
          mt={"20px"}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
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
      <p>hi, {transcript}</p>
    </Toolbar>
  );
};

export default App;
