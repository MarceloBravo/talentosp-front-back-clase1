import style from './MessageComponent.module.css'

export const MessageComponent = ({type, message}) => {
  return (
    <>
        <div className={`${style[type]}  ${style.msgStyle}`}>
            { message }
        </div>
    </>
  )
}