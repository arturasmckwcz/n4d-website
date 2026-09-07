import { useEffect } from "react";
import { EventN4DType } from "need4deed-sdk";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { CustomHeading, Heading4 } from "../styled/text";
import { formatDateRange } from "../../utils";

// Hardcoded rather than fetched: useEvents()'s live API call was stuck in
// permanent isLoading (showing "Loading upcoming events..." indefinitely on
// production), so this mirrors EventPage.tsx's own hardcoded "Lasst uns
// machen" content directly instead of depending on that broken fetch.
const UPCOMING_EVENT = {
  title: { de: "Lasst uns machen", en: "Let's make it happen" },
  date: new Date("2026-11-10T17:30:00+01:00"),
  dateEnd: new Date("2026-11-10T20:30:00+01:00"),
  shortDescription: {
    de: "Ein Abend über die Zukunft (post)migrantischen Engagements, im Rahmen der Initiative „Ehrenamt interkulturell“ im Refugio Berlin.",
    en: 'An evening about the future of (post-)migrant engagement, part of the "Ehrenamt interkulturell" initiative at Refugio Berlin.',
  },
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--homepage-events-section-event-card-width);
  gap: var(--homepage-events-section-event-card-gap);
`;

const EventHeadLine = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  gap: var(--homepage-events-section-event-card-headline-gap);
`;

const EventTitleTag = styled.div`
  padding: var(--homepage-events-section-event-card-event-title-tag-padding);
  border-radius: var(
    --homepage-events-section-event-card-event-title-tag-border-radius
  );
  background-color: var(--color-orchid);
`;

interface Props {
  onEventDataFetch: (eventType: EventN4DType) => void;
}

export default function EventCard({ onEventDataFetch }: Props) {
  const { i18n } = useTranslation();
  const isGerman = i18n.language === "de";

  useEffect(() => {
    onEventDataFetch(EventN4DType.WORKSHOP);
  }, [onEventDataFetch]);

  return (
    <Card>
      <EventHeadLine>
        <EventTitleTag>
          <CustomHeading
            fontWeight={700}
            fontSize="24px"
            lineheight="24px"
            color="var(--color-midnight)"
            margin="0px"
          >
            {isGerman ? UPCOMING_EVENT.title.de : UPCOMING_EVENT.title.en}
          </CustomHeading>
        </EventTitleTag>

        <Heading4 color="var(--color-white)" margin={0}>
          {formatDateRange(
            UPCOMING_EVENT.date,
            UPCOMING_EVENT.dateEnd,
            " | ",
            isGerman ? "de-DE" : "en-US",
          )}
        </Heading4>
      </EventHeadLine>

      <Heading4 color="var(--color-white)">
        {isGerman
          ? UPCOMING_EVENT.shortDescription.de
          : UPCOMING_EVENT.shortDescription.en}
      </Heading4>
    </Card>
  );
}
