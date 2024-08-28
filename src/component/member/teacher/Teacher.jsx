import Image from 'next/image';
import styles from './staticMain.module.css';

export default function Teacher({ teacher }) {
  return (
    <div className={styles.teacher}>
      <h3>{teacher.title}</h3>
      <div className={styles.profInfo}>
        <div className={styles.profImage}>
          <Image
            src={teacher.image}
            alt={teacher.name}
            width={200}
            height={250}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p>{teacher.description}</p>
      </div>
    </div>
  );
}
