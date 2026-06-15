import styled from "styled-components";

import { StaticPageLayout } from "../components/Layouts/staticPageLayout";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeoexTJv7HAxuaMvab-tVVcR0pDxyeQKsGkSAlAmJOpoWpW0g/viewform?usp=publish-editor";

const Container = styled.div`
  max-width: 680px;
  margin: 60px auto;
  padding: 0 24px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 24px;
`;

const Meta = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MetaItem = styled.li`
  font-size: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 40px;
`;

const RegisterButton = styled.a`
  display: inline-block;
  background: var(--color-primary, #7c3aed);
  color: #fff;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    opacity: 0.88;
  }
`;

const CommunityTagline = styled.p`
  margin-top: 40px;
  font-size: 0.85rem;
  color: #888;
  line-height: 1.8;
  text-align: center;
`;

export default function EventPage() {
  return (
    <StaticPageLayout>
      <Container>
        <Title>VolunTea</Title>
        <Meta>
          <MetaItem>📅 Thursday, 9 July 2026 &mdash; 5:30&ndash;7:00 PM (Doors open at 5:00 PM)</MetaItem>
          <MetaItem>📍 Art Space in Exile, Elsenstraße 87, 12435 Berlin</MetaItem>
          <MetaItem>👥 For volunteers who support refugees</MetaItem>
          <MetaItem>🗣️ Language: English</MetaItem>
        </Meta>
        <Description>
          A small gathering for volunteers to share experiences and learn more
          about how to support people in need in Berlin. Whether you&apos;re
          already active or just getting started &mdash; come by, meet the team
          and other volunteers, and get inspired.
        </Description>
        <RegisterButton href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
          Register now
        </RegisterButton>
        <CommunityTagline>
          Підтримуємо всі спільноти! &middot; Поддерживаем все сообщества! &middot; حمایت از همه جوامع‌! &middot; ندعم جميع المجتمعات!
        </CommunityTagline>
      </Container>
    </StaticPageLayout>
  );
}
