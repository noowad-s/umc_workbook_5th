import styled from "styled-components";
import Page from "../Components/PageBasic";
import { tvs } from "../tvDummy"

function TV(){
    return (
        <div>
          <TVWrap>
            {tvs.results.map((item) => {
              return <Page data={item} />;
            })}
          </TVWrap>
        </div>
      );
}

export default TV;

const TVWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;