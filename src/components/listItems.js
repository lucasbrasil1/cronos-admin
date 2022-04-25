import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';

import Home from '../pages/Home';
import Negocio from '../pages/Negocio';
import { RoomPreferences, Work, CalendarMonth, Store, LocationCity } from '@mui/icons-material';

import {Link} from 'react-router-dom';
import Servicos from '../pages/Servicos';
import Localizacao from '../pages/Localizacao';
import Profissionais from '../pages/Profissionais';
import Personalizacao from '../pages/Personalizacao';

export const mainListItems = (
    <React.Fragment>
        <Link to="/" element={<Home />}>
            <ListItemButton>
                <ListItemIcon>
                    <CalendarMonth />
                </ListItemIcon>
                <ListItemText primary="Gerenciamento" />
            </ListItemButton>
        </Link>

        <Link to="/negocio" element={<Negocio />}>
            <ListItemButton>
                <ListItemIcon>
                    <Store />
                </ListItemIcon>
                <ListItemText primary="Negócio" />
            </ListItemButton>
        </Link>

        <Link to="/servicos" element={<Servicos />}>
            <ListItemButton>
                <ListItemIcon>
                    <Work />
                </ListItemIcon>
                <ListItemText primary="Serviços" />
            </ListItemButton>
        </Link>

        <Link to="/localizacao" element={<Localizacao />}>
        <ListItemButton>
            <ListItemIcon>
                <LocationCity />
            </ListItemIcon>
            <ListItemText primary="Localização" />
        </ListItemButton>
        </Link>

        <Link to="/profissionais" element={<Profissionais />}>
        <ListItemButton>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Profissionais" />
        </ListItemButton>
        </Link>

        <Link to="/personalizacao" element={<Personalizacao />}>
        <ListItemButton>
            <ListItemIcon>
                <RoomPreferences />
            </ListItemIcon>
            <ListItemText primary="Personalização" />
        </ListItemButton>
        </Link>
        
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);