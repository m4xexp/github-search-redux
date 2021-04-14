const UserInfo = (props) => {
  return (
    <div className="user-info">
      <div className="avatar">
        <img src={props.user.avatar_url} alt="avatar" />
      </div>
      <div className="content">
        <h1>{props.user.name}</h1>
        <p>
          <strong>Bio: </strong>
          {props.user.bio}
        </p>
        <p>
          <strong>
            Location: <strong>{props.user.location}</strong>
          </strong>
        </p>
        <p>
          <strong>
            Followers: <strong>{props.user.location}</strong>
          </strong>
        </p>
        <p>
          <strong>
            Following: <strong>{props.user.location}</strong>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
