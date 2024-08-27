import Image from 'next/image';
import styles from '@app/staticMain.module.css';

export default function Teacher({ teacher }) {
  return (
    <div className={style.teacher}>
      <h3>{teacher.title}</h3>
      <div className={style.profInfo}>
        <div className={style.profImage}>
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
