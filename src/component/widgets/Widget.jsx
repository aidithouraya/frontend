import React from 'react';
import './widget.scss';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AdminIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorIcon from '@mui/icons-material/SupervisorAccount';
import UserIcon from '@mui/icons-material/Person';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import { useNavigate } from 'react-router-dom';

const Widget = ({ titel, type, sxx, statestique, role }) => {
  const navigate = useNavigate();

  const Icon = () => {
    switch (role) {
      case 'admin':
        return <AdminIcon />;
      case 'engineer':
        return <EngineeringIcon />;
      case 'supervisor':
        return <SupervisorIcon />;
      case 'users':
        return <UserIcon />;
      default:
        return null;
    }
  };

  return (
    <Card sx={sxx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack
            direction='row'
            sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }}
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography color='text.secondary' variant='overline'>
                {titel}
              </Typography>
              <Typography variant='h4'>{type}</Typography>
            </Stack>

            <div className='right'>
              <Avatar
                sx={{ backgroundColor: '#7451f8', height: '56px', width: '56px' }}
              >
                {Icon()}
              </Avatar>
              <p></p>
            </div>
          </Stack>
        </Stack>
        <span className='link' onClick={() => navigate('/by-role/' + role)} style={{
          cursor: 'pointer'
        }}>
          See all {role === 'users' ? role : role + 's'} ...
        </span>
      </CardContent>
    </Card>
  );
};

export default Widget;
