import { Lang } from "need4deed-sdk";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { StaticPageLayout } from "../components/Layouts/staticPageLayout";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScXWc342tXAFKy4Duf62W4Rc0RtKYAlXrhnv2Ueho5UFEYsAg/viewform?usp=publish-editor";

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
        <Title>Need4Deed Open Air</Title>
        <Meta>
          {isGerman ? (
            <MetaItem>
              📅 Samstag, 29. August 2026 &mdash; 15:00&ndash;19:00 Uhr
            </MetaItem>
          ) : (
            <MetaItem>
              📅 Saturday, 29 August 2026 &mdash; 3:00&ndash;7:00 PM
            </MetaItem>
          )}
          <MetaItem>📍 Elsenstraße 87, 12435 Berlin</MetaItem>
          <MetaItem>
            {isGerman ? "👥 Offen für alle" : "👥 Open to everyone"}
          </MetaItem>
        </Meta>
        <Description>
          {isGerman ? (
            <>
              Es ist wieder soweit. Wir feiern Solidarität. Wir halten euch hier
              auf dem Laufenden, sobald wir mehr Infos zu Künstler*innen und
              anderen Überraschungen teilen können :) Und sobald ihr euch
              angemeldet habt, schicken wir euch ein paar Tage vor der
              Veranstaltung eine Erinnerung!
            </>
          ) : (
            <>
              It&apos;s that time of the year again. Celebrating solidarity. We
              will keep you up to date here once we can share more info on
              artists and other surprises :) And once registered, we will send
              you a reminder a few days before the event!
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
