import { Lang } from "need4deed-sdk";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { StaticPageLayout } from "../components/Layouts/staticPageLayout";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5wRZ0U0wEb_QvRbfuGzM196jRIVflUBC_273wSk2Dl3Gcnw/viewform";

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
  white-space: pre-line;
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

const CommunityTagline = styled.div`
  margin-top: 40px;
  font-size: 0.85rem;
  color: #888;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 16px;
  line-height: 1.8;
`;

const LtrTag = styled.span`
  direction: ltr;
  unicode-bidi: embed;
`;

const RtlTag = styled.span`
  direction: rtl;
  unicode-bidi: embed;
`;

export default function EventPage() {
  const { lng } = useParams();
  const { i18n } = useTranslation();

  // Visiting /event-page/de directly should switch the site's language too,
  // matching how Subpage.tsx handles its own :lng param.
  useEffect(() => {
    if (lng === Lang.DE || lng === Lang.EN) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  // Driven by i18n.language (not just the URL param) so flipping the DE/EN
  // switcher in the header also updates this page without a navigation.
  const isGerman = i18n.language === Lang.DE;

  return (
    <StaticPageLayout>
      <Container>
        <Title>Sommerfest</Title>
        <Meta>
          {isGerman ? (
            <MetaItem>
              📅 Samstag, 31. August 2026 &mdash; 13:00&ndash;18:00 Uhr
            </MetaItem>
          ) : (
            <MetaItem>
              📅 Saturday, 31 August 2026 &mdash; 1:00&ndash;6:00 PM
            </MetaItem>
          )}
          <MetaItem>
            📍 ArtSpace in Exile, Elsenstraße 87, 12435 Berlin (Alt-Treptow)
          </MetaItem>
          <MetaItem>
            {isGerman ? "👥 Offen für alle" : "👥 Open to everyone"}
          </MetaItem>
        </Meta>
        <Description>
          {isGerman ? (
            <>
              Liebe Freiwillige, wir freuen uns, euch zu unserem Sommerfest
              einladen zu dürfen, das in Zusammenarbeit mit Du für Berlin am
              Samstag, den 31. August von 13:00 bis 18:00 Uhr organisiert wird.
              {"\n"}Egal, ob Sie bereits freiwillig helfen oder sich für die
              Freiwilligenarbeit mit geflüchteten Menschen interessieren, kommen
              Sie vorbei, bringen Sie einen Freund oder mehrere mit!
              {"\n"}- 13:00–13:30 Begrüßung{"\n"}- 13:30–18:00 Live Musik
              (Bağlama), Live Musik (Jazz und Soukous), Live Electronic DJ Set
              {"\n"}- 13:30–17:00 Buffet Der Begegnung mit Über den Tellerand
              e.V., Samenbomben-Workshop, Gruppenworkshop{"\n"}- Ganztägig:
              Kinderbereich, Leichte Speisen und Getränke gratis!
            </>
          ) : (
            <>
              Dear volunteers, we are pleased to invite you to our Sommerfest
              organized in collaboration with Du für Berlin on Saturday, August
              31st from 13:00 till 18:00.
              {"\n"}Whether you&apos;re already a volunteer or interested in
              volunteering with refugees, come join us, bring a friend or more!
              {"\n"}- 13:00-13:30 Meet and Greet{"\n"}- 13:30-18:00 Live Music
              (Bağlama), Live Music (Jazz and Soukous), Live Electronic DJ Set
              {"\n"}- 13:30-17:00 Food it yourself with Über den Tellerand e.V.,
              Seedbombs Workshop, Group Workshop{"\n"}- All Day: Kids Space,
              Light food and drinks are on the house!
            </>
          )}
        </Description>
        <RegisterButton
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isGerman ? "Jetzt anmelden" : "Register now"}
        </RegisterButton>
        <CommunityTagline>
          <LtrTag>Підтримуємо всі спільноти!</LtrTag>
          <LtrTag>Поддерживаем все сообщества!</LtrTag>
          <RtlTag>!حمایت از همه جوامع</RtlTag>
          <RtlTag>!ندعم جميع المجتمعات</RtlTag>
        </CommunityTagline>
      </Container>
    </StaticPageLayout>
  );
}
