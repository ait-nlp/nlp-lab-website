import Teacher from './teacher/Teacher';
import Student from './student/Student';
import styles from './staticMain.module.css';

export default function MemberList({ teachers, students }) {
  return (
    <div className={styles.memberList}>
      <h2>Member</h2>
      <div className={styles.teachers}>
        <h3>教員情報</h3>
        {teachers.map((teacher, index) => (
          <Teacher key={index} teacher={teacher} />
        ))}
      </div>
      <div className={styles.students}>
        <h3>学部3年生</h3>
        <div className={styles.MemberContainer}>
          {students.map((student, index) => (
            <Student key={index} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}
