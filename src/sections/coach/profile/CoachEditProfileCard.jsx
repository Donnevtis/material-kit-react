import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import AvatarEditor from './AvatarEditor';

// ----------------------------------------------------------------------

export default function CoachProfileCard() {
  return (
    <Box
      maxWidth={500}
      minWidth={350}
      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
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
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <AvatarEditor src="/assets/images/avatars/avatar_25.jpg" />
                    </Box>
                  </Grid>
                  <Grid xs={12} md={12}>
                    <TextField label="Fullname" margin="dense" size="small" fullWidth />

                    <TextField label="Personal name" margin="dense" size="small" />
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
