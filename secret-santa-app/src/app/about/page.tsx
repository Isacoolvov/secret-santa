'use client'

import * as React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { SwitchMain, MainButton, SecondaryButton, BootstrapButton } from "@/helpers/uiHelpers";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };


export default function CustomizedButtons() {
    return (
        <Stack spacing={2} direction="row">
            <MainButton variant="contained">Создать игру</MainButton>
            <SecondaryButton variant="contained">Жеребьевка</SecondaryButton>

            <BootstrapButton variant="contained" disableRipple>
                Тест бтн
            </BootstrapButton>
            111
            <Button variant="contained" sx={{
                backgroundColor: 'yellow'
            }}>Создать игру222</Button>


            <SwitchMain {...label} defaultChecked />
            <SwitchMain {...label} />
            <SwitchMain {...label} disabled defaultChecked />
        </Stack>



    );
}
