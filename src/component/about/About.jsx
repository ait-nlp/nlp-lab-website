import React from 'react'
import styles from '@app/staticMain.module.css'

export default function About() {
  return (
    <section id='about' className={style.section}>
      <div className={style.about}>
        <h2>About</h2>
        <p>
          ここは研究室のページです。文章の見本です。文章が入る文章が入る文章が入る。ここは研究室のページです。文章の見本です。文章が入る文章が入る文章が入る。
        </p>
      </div>
    </section>
  );
}
