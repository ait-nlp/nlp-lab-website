import React from 'react'
import styles from './contact.module.css'
import Nav from '@/component/navigation/nav'
import Title from '@/component/title/title'

const PAGE_TITLE = 'コンタクト'
const PAGE_DISCRIPTION = '以下のフォームに必要事項をご記入ください'

function Contact() {
  return (
    <div>
      <Nav />
      <Title title={PAGE_TITLE} discription={PAGE_DISCRIPTION} />

      <form action='' className={styles.contactForm}>
        <label>お名前</label>
        <input type='text' placeholder='お名前' />

        <label>お名前 (ふりがな)</label>
        <input type='text' placeholder='お名前 (ふりがな)' />

        <label>メールアドレス</label>
        <input type='email' placeholder='メールアドレス' />

        <label>お問い合わせ内容</label>
        <textarea placeholder='お問い合わせ内容をご記入ください'></textarea>

        <button type='submit'>送信する</button>
      </form>
    </div>
  )
}

export default Contact
