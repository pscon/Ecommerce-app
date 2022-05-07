import styled from "styled-components";

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
font-size: 14px;
align-items: center;
justify-content: center;
font-weight: 500;
`

const Announcement = () => {
  return <div>


<Container>

    Super Deal! Free Delivery Nation wide on Orders above N20,000
</Container>
  </div>;
};

export default Announcement;
