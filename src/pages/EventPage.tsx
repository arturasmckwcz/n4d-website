import { Lang } from "need4deed-sdk";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { StaticPageLayout } from "../components/Layouts/staticPageLayout";

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfsr2Nppw6YGSkyFL54LRk44jv1jGtS2Q5uIPLCBTINJ1g2EA/viewform?usp=dialog";

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
        <Title>{isGerman ? "Lasst uns machen" : "Let's make it happen"}</Title>
        <Meta>
          {isGerman ? (
            <MetaItem>
              📅 10. November 2026 &mdash; 17:30&ndash;20:30 Uhr
            </MetaItem>
          ) : (
            <MetaItem>📅 November 10, 2026 &mdash; 5:30&ndash;8:30 PM</MetaItem>
          )}
          <MetaItem>📍 Refugio Berlin</MetaItem>
          <MetaItem>
            {isGerman
              ? "🎟️ Eintritt frei mit Anmeldung, auf Deutsch"
              : "🎟️ Free entry with registration, held in German"}
          </MetaItem>
        </Meta>
        <Description>
          {isGerman ? (
            <>
              Ob letztes Jahr angekommen oder vor zwanzig Jahren &ndash; viele
              Menschen mit Migrationsgeschichte wollen etwas beitragen. Aus
              diesem Willen wird aber nicht von selbst Ehrenamt: Das deutsche
              Engagement-System ist oft zu starr, um so viel Energie
              aufzunehmen. Kann migrantisches Engagement helfen, Rassismus zu
              bekämpfen? Vielleicht, aber zuerst muss es ihn selbst überleben.
              {"\n"}Wir laden im Rahmen der Initiative „Ehrenamt
              interkulturell&ldquo; am 10. November 2026 ins Refugio Berlin ein.
              Ein Abend über die Zukunft (post)migrantischen Engagements: Wie
              wird aus Bereitschaft konkrete Tat, und wie flexibel muss das
              Ehrenamt dafür werden? Mit Impuls aus der Wissenschaft, Podium aus
              Politik und Zivilgesellschaft &ndash; u.a. mit Senatorin Kiziltepe
              (Senatsverwaltung für Arbeit, Soziales, Gleichstellung,
              Integration, Vielfalt und Antidiskriminierung) &ndash; und
              anschließendem Netzwerken.
            </>
          ) : (
            <>
              Whether you arrived last year or twenty years ago, many people
              with a migration history want to contribute. But that willingness
              doesn&apos;t turn into volunteering on its own: Germany&apos;s
              civic engagement system is often too rigid to absorb that much
              energy. Can migrant engagement help fight racism? Maybe, but first
              it has to survive it.
              {"\n"}As part of the &quot;Ehrenamt interkulturell&quot;
              (Volunteering Interculturally) initiative, we invite you to
              Refugio Berlin on November 10, 2026. An evening about the future
              of (post-)migrant engagement: how does willingness turn into
              concrete action, and how flexible does volunteering need to become
              for that? With input from academia, a panel from politics and
              civil society &ndash; including Senator Kiziltepe (Senate
              Department for Labour, Social Affairs, Equality, Integration,
              Diversity and Anti-Discrimination) &ndash; and networking
              afterward.
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
