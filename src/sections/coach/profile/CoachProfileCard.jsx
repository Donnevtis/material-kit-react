import { useState } from 'react';

import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import Iconify from 'src/components/iconify';

import CoachEditProfileCard from './CoachEditProfileCard';
// ----------------------------------------------------------------------

export default function CoachProfileCard() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box maxWidth={500}>
      <Modal open={open} onClose={handleClose}>
        <CoachEditProfileCard />
      </Modal>
      <Card maxWidth="m">
        <CardHeader title="Personal information" />
        <Divider />

        <CardContent>
          <Box
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
          >
            <Box sx={{ p: 2, width: '100%' }}>
              <Paper sx={{ width: '100%', mb: 2 }}>
                <Grid container spacing={2}>
                  <Grid xs={12}>
                    <Stack direction="row-reverse">
                      <IconButton onClick={handleOpen}>
                        <Iconify icon="eva:edit-2-fill" />
                      </IconButton>
                    </Stack>
                  </Grid>

                  <Grid xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Avatar
                        src="/assets/images/avatars/avatar_25.jpg"
                        alt="avatar"
                        sx={{
                          width: 136,
                          height: 136,
                          mb: 3,
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid xs={6}>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        Fullname
                      </Typography>
                      <Typography color="inherit" variant="subtitle2" underline="hover" noWrap>
                        Jaydon Frankie
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={6} md={4}>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        Personal name
                      </Typography>

                      <Typography
                        color="inherit"
                        variant="subtitle2"
                        underline="hover"
                        noWrap
                        sx={{ cursor: 'pointer' }}
                      >
                        jaydon-f
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12}>
                    <Divider />
                  </Grid>
                  <Grid xs={12}>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        Personal link
                      </Typography>
                      <Typography color="inherit" variant="subtitle2" underline="hover" noWrap>
                        <Link>waytg.com/coach/34234</Link>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12}>
                    <Divider />
                  </Grid>
                  <Grid xs={10}>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        Description
                      </Typography>
                      <Typography color="inherit" variant="subtitle2" underline="hover">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus
                        praesentium exercitationem delectus quisquam aperiam? Amet deleniti fugiat
                        iste?
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
