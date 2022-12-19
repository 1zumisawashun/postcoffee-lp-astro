import styled from "styled-components";
import { notifications } from "../../../functions/constants/notifications";
import { BaseText, BaseContainer } from "../../../functions/themes";

export const Notification = () => {
  return (
    <BaseContainer className="-white">
      <NotificationContainer>
        <Headline>メディア掲載情報</Headline>
        <ScrollPanel>
          {notifications.map((notification, index) => (
            <ContentWrapper key={index}>
              <FlexWrapper>
                <Block className="-w10">
                  <BaseText>{notification.createdAt}</BaseText>
                </Block>
                <Block className="-w80">
                  <BaseText>{notification.text}</BaseText>
                </Block>
              </FlexWrapper>
            </ContentWrapper>
          ))}
        </ScrollPanel>
      </NotificationContainer>
    </BaseContainer>
  );
};

const NotificationContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 5% auto;
`;
const ScrollPanel = styled.div`
  height: 500px;
  overflow-y: scroll;
`;
const Headline = styled(BaseText)`
  width: fit-content;
  margin: auto;
  border-bottom: 1px solid black;
`;
const ContentWrapper = styled.div`
  margin: 3% 0;
  padding: 3% 0;
  border-bottom: 1px solid #f1f1f1;
`;
const FlexWrapper = styled.div`
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
