'use client'

// エラー時に表示する画面
const Error = ({ error }) => {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  )
}

export default Error
