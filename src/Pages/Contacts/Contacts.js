import React from "react";
import Container from "../../Components/layout/Container";
import Bradcamp from "../../Components/layout/Bradcamp";
import InputBox from "../../Components/layout/InputBox";
import Button from "../../Components/layout/Button";
import Map from "../../Components/layout/Map";
const Contacts = () => {
  return (
    <Container>
      <Bradcamp />
      <div>
        <h2 className=" mb-10 font-dm text-[39px] font-bold text-[#262626]">
          Fill up a Form
        </h2>
        <InputBox as="input" placeholder ="Give your Name" title="Name" />
        <InputBox as="input" placeholder ="Your email here" title="Email" />
        <InputBox as="Textarea" placeholder ="Your message here" title="Message" />
      </div>
      <div>
        <Button title="Post"/>
      </div>
      {/* <div className=" mt-32">
        <Map/>
      </div> */}
    </Container>
  );
};

export default Contacts;
