import { BASE_URL } from "@/helpers/helpers_base_url";

export async function navigateToInviteSend1(prevState: any, participantsData: FormData) {
  let successMessage = '';
  let errorMessage;

  try {
    const response = await fetch(`http://51.107.14.25:8080/invitations/${participantsData.get('gameId')}/send`, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${participantsData.get('access')}`,
      },
      body: JSON.stringify([{
        name: participantsData.get('name'),
        email: participantsData.get('email'),
      }]),
    });

    console.log('11post navigateToInviteSend');
    console.log(participantsData.get('access'));

    if (!response.ok) {
      errorMessage = await response.text() || 'Ошибка при отправке данных на сервер';
      throw new Error(errorMessage);
    }

     if (response.headers.get('Content-Type') === 'application/json') {
      const responseBody = await response.json();
      if (response.status === 200) {
        successMessage = 'Данные успешно отправлены на сервер';
      } else if (response.status === 202) {
        successMessage = 'Вы уже ';

        successMessage = ('Message:' +  responseBody.message);

      }
    } else {
       const responseData = await response.text();
       successMessage ='' + responseData;
    }
  } catch (error) {
    errorMessage = error;
    errorMessage = ('Ошибка:' +  errorMessage);
  }

  return { successMessage, errorMessage };
}
