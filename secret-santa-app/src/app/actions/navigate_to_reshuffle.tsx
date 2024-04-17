export async function navigate_to_reshuffle(prevState: any, participantsData: FormData) {
  let successMessage = '';
  let errorMessage = '';


  console.log('participantsData');

  console.log(participantsData);


  try {
    const response = await fetch(`http://51.107.14.25:8080/games/${participantsData.get('game_id')}/reshuffle`, {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${participantsData.get('access')}`,
      },
      body: JSON.stringify([{}]),
    });

    console.log('reshuffle post navigateTo...');
    console.log(participantsData.get('access'));

    if (!response.ok) {
      errorMessage = await response.text() || 'Ошибка при отправке данных на сервер';
      throw new Error(errorMessage);
    }


    console.log('response');

    

     if (response.headers.get('Content-Type') === 'application/json') {
      const responseBody = await response.text();



      if (response.status === 200) {
        successMessage = 'Жеребьевка завершена';
      } 
    } else {
       const responseData = await response.text();
       successMessage ='' + responseData;
    }
  } catch (error) {
    errorMessage = error.message;
    errorMessage = ('Ошибка:' +  errorMessage);
  }

  return { successMessage, errorMessage };
}
