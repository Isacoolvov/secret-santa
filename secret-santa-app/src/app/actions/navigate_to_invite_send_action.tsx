
'use server';


export async function navigateToInviteSend(participantsData: FormData) {

  console.log(participantsData);

  
  try {
    const response = await fetch('http://51.107.14.25:8080/invitations/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(participantsData),
    });

    if (!response.ok) {
      throw new Error('Ошибка при отправке данных на сервер');
    }

    console.log('Данные успешно отправлены на сервер');
  } catch (error) {
    console.error('Ошибка:', error.message);
  }

}

