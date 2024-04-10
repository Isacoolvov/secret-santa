export async function navigateToAcceptSend(prevState: any, participantsData: FormData) {
  let successMessage = '';
  let errorMessage = '';
  
  try {
    const response = await fetch(`http://51.107.14.25:8080/invitations/accept/${participantsData.get('invite_id')}`, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${participantsData.get('access')}`,
      },
      body: JSON.stringify({})
    });

    console.log('accept');

    if (!response.ok) {
      const errorData = await response.json();
      errorMessage = errorData.message || 'Ошибка при отправке данных на сервер';
      throw new Error(errorMessage);
    }

    const responseBody = await response.json();

    if (response.status === 200) {
      successMessage = 'Данные успешно отправлены на сервер';
    } else if (response.status === 202) {
      successMessage = 'Вы уже являетесь участником игры.';
      console.log('Message:', responseBody.message);
    }
  } catch (error) {
    errorMessage = error.message;
    console.error('Ошибка:', errorMessage);
  }

  return { successMessage, errorMessage };
}
