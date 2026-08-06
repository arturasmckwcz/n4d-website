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
              Es ist wieder so weit: Freiwillige und Freund*innen feiern
              gemeinsam Solidarität! Wir freuen uns riesig auf ein Konzert der
              fantastischen Band Zarabudu und ein unglaubliches DJ-Set von
              DumTak.
              {"\n"}Es ist Wahlzeit! Wenn dir ein Thema rund um Migration,
              Inklusion oder die Art von Unterstützung, die Migrant*innen in
              Berlin deiner Meinung nach verdienen, wichtig ist, ist jetzt deine
              Chance, den Politiker*innen zu sagen, was sie tun sollten. Nutze
              die Need4Deed-Wahlbox, um einen Brief an eine Politikerin oder
              einen Politiker zu schreiben, wir schicken ihn vor der Wahl ab.
              {"\n"}Freu dich außerdem auf Sonnendrucke und weitere
              Überraschungen :)
              {"\n"}Sobald du dich angemeldet hast, schicken wir dir ein paar
              Tage vor der Veranstaltung eine Erinnerung!
            </>
          ) : (
            <>
              It&apos;s that time of year again: volunteers and friends
              celebrating solidarity! We&apos;re lucky to have a concert from
              the fantastic band Zarabudu and an incredible DJ set from DumTak.
              {"\n"}It&apos;s election time! If there&apos;s a topic related to
              migration, inclusion, or the kind of support you think migrants in
              Berlin deserve, now&apos;s your chance to say what politicians
              should do about it. Use the Need4Deed election box to write a
              letter to a politician, and we&apos;ll send it off before the
              election.
              {"\n"}Expect sun prints and more surprises too :)
              {"\n"}Once you register, we&apos;ll send you a reminder a few days
              before the event!
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
