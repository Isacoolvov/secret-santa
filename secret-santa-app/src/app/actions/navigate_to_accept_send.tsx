'use server';

export async function navigateToAcceptSend(participantsData: FormData) {
  try {
    const response = await fetch(`http://51.107.14.25:8080/invitations/accept?gameId=${participantsData.get('gameId')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${participantsData.get('access')}`,
      },
      body: JSON.stringify(participantsData),
    });
    
    console.log(response);
    if (!response.ok) {
      throw new Error('Ошибка при отправке данных на сервер');
    }

    console.log('Данные успешно отправлены на сервер');
  } catch (error) {
    console.error('Ошибка:');
  }
}
