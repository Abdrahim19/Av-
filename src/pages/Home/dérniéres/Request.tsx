import { FC } from "react"

type user = {
    profileImg:string,
    username:string,
    user_location:string
}
type props = {
    userInfo:user
    Request_titel:string,
    Request_img:string
    Request_discrption:string,
}
const Request:FC<props> = ({Request_discrption , Request_img , Request_titel  , userInfo}) => {
  return (
    <div className="rounded-4 row shadow">
      <div className="d-flex align-items-center gap-2">
        <img src={userInfo.profileImg} alt="" />
        <div>
          <span>{userInfo.username}</span>
          <p>{userInfo.user_location} </p>
        </div>
      </div>
      <h1>{Request_titel}</h1>
      <img src={Request_img} alt={Request_titel} />
      <p>{Request_discrption}</p>
    </div>
  )
}

export default Request