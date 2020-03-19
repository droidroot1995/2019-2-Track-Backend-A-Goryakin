export default function autoFill() {
  localStorage.setItem(
    'chats',
    JSON.stringify([
      {
        id: 0,
        avatar: 'http://pikchyriki.net/avatar/krutye/64/30.jpg',
        name: 'Алексей',
        time: '22:30',
        message: 'Добрый вечер!',
        isGroup: false,
        status: 'sent',
      },
      {
        id: 1,
        avatar: 'http://pikchyriki.net/avatar/krutye/64/19.jpg',
        name: 'Planet42',
        time: '9:00',
        message: 'Привет',
        isGroup: true,
        status: '1',
      },
      {
        id: 2,
        avatar: 'http://pikchyriki.net/avatar/krutye/64/21.jpg',
        name: 'Мартин',
        time: '10:00',
        message: 'Доброе утро!',
        isGroup: false,
        status: 'sent_read',
      },
      {
        id: 3,
        avatar: 'http://pikchyriki.net/avatar/krutye/64/24.jpg',
        name: 'Михаил',
        time: '14:00',
        message: 'Добрый день!',
        isGroup: false,
        status: '1',
      },
    ]),
  )

  localStorage.setItem(
    'messages',
    JSON.stringify({
      0: [
        {
          name: 'Александр',
          msg: {
            msg: 'Добрый вечер!',
            attachments: [],
            audios: [],
          },
          status: 'sent',
          self: true,
          time: '22:30',
        },
      ],
      1: [
        {
          name: 'Planet 42',
          msg: {
            msg: 'Привет',
            attachments: [],
            audios: [],
          },
          status: 'sent',
          self: false,
          time: '9:00',
        },
      ],
      2: [
        {
          name: 'Александр',
          msg: {
            msg: 'Доброе утро!',
            attachments: [],
            audios: [],
          },
          status: 'sent',
          self: true,
          time: '10:00',
        },
      ],
      3: [
        {
          name: 'Михаил',
          msg: {
            msg: 'Добрый день!',
            attachments: [],
            audios: [],
          },
          status: 'sent',
          self: false,
          time: '14:00',
        },
      ],
    }),
  )

  localStorage.setItem(
    'userInfo',
    JSON.stringify({
      avatar: 'http://pikchyriki.net/avatar/krutye/64/28.jpg',
      name: 'Александр Горякин',
      username: '@droidroot',
      bio: 'Аспирант 1 года обучения ФАЛТ МФТИ',
    }),
  )
}
