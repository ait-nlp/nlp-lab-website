import MemberList from './MemberList';

export default function Member() {
  const teachers = [
    {
      title: '教授',
      name: '教員名',
      image: '/member_img/testicon.jpg',
      description: 'ここに教員情報を記入する。ここに教員情報を記入する。',
    },
  ];

  const students = [
    {
      name: 'ライオン',
      image: '/member_img/testicon.jpg',
      description: 'がおーーーーーーーーーーーーーーー',
    },
    {
        name: 'ライオン',
        image: '/member_img/testicon.jpg',
        description: 'がおーーーーーーーーーーーーーーー',
      },
      {
        name: 'ライオン',
        image: '/member_img/testicon.jpg',
        description: 'がおーーーーーーーーーーーーーーー',
      },
    // Add more student objects here
  ];

  return (
    <section id='member'>
      <MemberList teachers={teachers} students={students} />
    </section>
  );
}
