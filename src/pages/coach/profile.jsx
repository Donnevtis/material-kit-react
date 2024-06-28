import { Helmet } from 'react-helmet-async';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { CoachSportsCard } from 'src/sections/coach/profile/sports/view';
import CoachProfileCard from 'src/sections/coach/profile/CoachProfileCard';
import { CoachContactsCard } from 'src/sections/coach/profile/contacts/view';
import { CoachCalendarsCard } from 'src/sections/coach/profile/calendars/view';
// ----------------------------------------------------------------------

export default function CoachProfilePage() {
  return (
    <>
      <Helmet>
        <title> Profile </title>
      </Helmet>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <CoachProfileCard />
          </Grid>
          <Grid xs={12} md={6}>
            <CoachSportsCard />
          </Grid>
          <Grid xs={12}>
            <CoachContactsCard />
          </Grid>
          <Grid xs={12}>
            <CoachCalendarsCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
