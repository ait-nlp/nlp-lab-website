import Image from 'next/image';
import styles from '@app/staticMain.module.css' 

export default function News() {
  return (
    <section id='news' className={style.section}>
      <div className={style.news}>
        <h2>News</h2>
        <div className={style.NewsContainer}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={style.NewsItem}>
              <Image src='/news_img/P1047364.jpg' alt='sample news' width={340} height={230} />
              <h3>タイトル</h3>
              <p>せつめいを書く。１行から、２行程度がでかけるといい</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
