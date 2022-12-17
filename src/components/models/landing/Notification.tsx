import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { BaseText } from "../../../functions/themes/BaseText";

export const Notification = () => {
  const lists = () => {
    const lists = [];
    for (let i = 0; i < 22; i++) {
      lists.push(
        <SimpleBarInner>
          <Content>
            <Block className="-w10">
              <BaseText>2021.4.28</BaseText>
            </Block>
            <Block className="-w80">
              <BaseText>
                とりぐら｜一人暮らしの毎日がもっと楽しく / Vol.49 突然過ぎ～！
                ベランダでの休憩中に現れた人は誰？【ハチノスハイム・Room294】
              </BaseText>
            </Block>
          </Content>
        </SimpleBarInner>
      );
    }
    return lists;
  };

  return (
    <NotificationContainer>
      <Headline>メディア掲載情報</Headline>
      <SimpleBar style={{ maxHeight: 300 }} forceVisible="y" autoHide={false}>
        {lists()}
      </SimpleBar>
    </NotificationContainer>
  );
};

const NotificationContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 10% auto;
`;
const Headline = styled(BaseText)`
  width: fit-content;
  margin: auto;
  border-bottom: 1px solid black;
`;
const SimpleBarInner = styled.div`
  margin: 3% 0;
  padding: 3% 0;
  border-bottom: 1px solid #f1f1f1;
`;
const Content = styled.div`
  display: flex;
`;
const Block = styled.div`
  margin: 0 auto;
  &.-w10 {
    width: 10%;
  }
  &.-w80 {
    width: 80%;
  }
`;
