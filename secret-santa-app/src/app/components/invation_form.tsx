"use client";

import Button, { ButtonProps } from '@mui/material/Button';
import { MainButton } from "@/helpers/uiHelpers";

export default function Invation_form() {


  return (
    <div>
      <form action="#">
      <div>
        <MainButton variant="contained">Создать свою карточку участников</MainButton>
        </div>
        <div>
        <MainButton variant="contained">Добавить участников вручную</MainButton>
        </div>
        <div>
        <MainButton variant="contained">Пригласить по ссылки</MainButton>
        </div>
      </form>
    </div>
  );
}
