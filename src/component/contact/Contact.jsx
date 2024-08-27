import styles from '@app/staticMain.module.css'

export default function Contact() {
  return (
    <section id='contact' className={style.section}>
      <div className={style.contact}>
        <h2>Contact</h2>
        <p>こちらのメールアドレスにご連絡ください。</p>
      </div>
    </section>
  );
}
