const MainTwo = async () => {
  const getData = async () => {
    let res = await fetch("http://localhost:3000/info");
    return res.json();
  };

  const data = await getData();
  return (
    <>
      <section className="main">
        {data.map((user: any) => {
          return (
            <>
              <div className="card" key={user.id}>
                <div className="first-div">
                  <div className="info-1">
                    <img
                      src={user.avatar_url}
                      width={117}
                      alt="there is a user img"
                    />
                    <div className="content">
                      <h3 className="user-name">{user.name}</h3>
                      <h5 className="username">
                        {user.username
                          ? user.username
                          : "This user doesn't have username :("}
                      </h5>
                      <p className="bio">
                        {user.bio ? user.bio : "This profile has no bio"}
                      </p>
                    </div>
                  </div>
                  <div className="info-2">
                    <p className="created">Created at: {user.created_at}</p>
                    <p className="created">Updated at: {user.updated_at}</p>
                  </div>
                </div>
                <div className="second-div">
                  <div className="about">
                    <ul className="list">
                      <li className="list-li">
                        <p className="list-li-p">Repos</p>
                        <h3 className="list-li-h3">{user.public_repos}</h3>
                      </li>
                      <li className="list-li">
                        <p className="list-li-p">Followers</p>
                        <h3 className="list-li-h3">{user.followers}</h3>
                      </li>
                      <li className="list-li">
                        <p className="list-li-p">Following</p>
                        <h3 className="list-li-h3">{user.following}</h3>
                      </li>
                    </ul>
                  </div>
                  <div className="links">
                    <div className="left-div">
                      <div className="left-div-wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="20"
                          viewBox="0 0 14 20"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.03013 0.00158203C9.42758 0.0504882 11.5835 1.33021 12.7973 3.4249C14.038 5.56599 14.072 8.13786 12.8882 10.3047L7.92872 19.3823L7.92196 19.3943C7.7038 19.7736 7.3129 20 6.87634 20C6.43974 20 6.04884 19.7736 5.83064 19.3943L5.82388 19.3823L0.86439 10.3047C-0.319437 8.13786 -0.285492 5.56599 0.95521 3.4249C2.16904 1.33021 4.32497 0.0504882 6.72239 0.00158203C6.82477 -0.000527343 6.92778 -0.000527343 7.03013 0.00158203ZM4.06376 6.25001C4.06376 7.80083 5.32544 9.06251 6.87626 9.06251C8.42712 9.06251 9.68876 7.80083 9.68876 6.25001C9.68876 4.69919 8.42708 3.43752 6.87626 3.43752C5.32544 3.43752 4.06376 4.69919 4.06376 6.25001Z"
                            fill="#4B6A9B"
                          />
                        </svg>
                        <h4 className="left-div-desc">Null</h4>
                      </div>
                      <div className="left-div-wrap2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                        >
                          <path
                            d="M7.4 5.01a5.48 5.48 0 0 0 .86 8.28c.09.05.2.04.28-.03a9.1 9.1 0 0 0 1.47-1.78.21.21 0 0 0-.08-.3A2.64 2.64 0 0 1 8.65 8.3c.17-.8 1.05-1.57 1.72-2.27l2.5-2.55a2.57 2.57 0 0 1 3.64-.02 2.6 2.6 0 0 1 .04 3.66l-1.52 1.56a.27.27 0 0 0-.06.28c.35 1 .44 2.44.2 3.52 0 .03.04.04.06.02l3.23-3.3a5.42 5.42 0 0 0-7.73-7.58L7.41 5.01 7.4 5Z"
                            fill="#4B6A9B"
                          />
                          <path
                            d="M13.44 13.75a5.43 5.43 0 0 0-1.71-7.06.3.3 0 0 0-.33.02 5.25 5.25 0 0 0-1.45 1.75.24.24 0 0 0 .1.32c.4.24.78.59 1.03 1.06.2.33.4.96.27 1.63-.12.9-1.02 1.71-1.74 2.45l-2.49 2.54a2.6 2.6 0 0 1-3.67.04 2.6 2.6 0 0 1-.03-3.66l1.52-1.57c.07-.07.1-.17.06-.27a7.56 7.56 0 0 1-.22-3.5c0-.04-.03-.05-.05-.03L1.55 10.7a5.5 5.5 0 0 0 .04 7.7 5.43 5.43 0 0 0 7.65-.08c.73-.81 3.83-3.68 4.2-4.58Z"
                            fill="#4B6A9B"
                          />
                        </svg>
                        <h3>
                          <a href={user.gists_url}>{user.gists_url}</a>
                        </h3>
                      </div>
                    </div>
                    <div className="right-div">
                      <div className="left-div-wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="18"
                          fill="none"
                        >
                          <path
                            d="M20 2.8c-.74.33-1.54.54-2.36.65.85-.51 1.5-1.3 1.8-2.27-.8.47-1.67.8-2.6 1a4.1 4.1 0 0 0-7 3.73A11.6 11.6 0 0 1 1.4 1.62 4.13 4.13 0 0 0 2.65 7.1C2 7.1 1.35 6.9.8 6.6v.04c0 2 1.42 3.65 3.28 4.03a4.1 4.1 0 0 1-1.85.07 4.14 4.14 0 0 0 3.83 2.85A8.24 8.24 0 0 1 0 15.3a11.54 11.54 0 0 0 6.29 1.84c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.36-.02-.53.82-.58 1.5-1.3 2.06-2.13Z"
                            fill="#4B6A9B"
                          />
                        </svg>
                        <h4 className="left-div-desc">{user.events_url}</h4>
                      </div>
                      <div className="left-div-wrap2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.86 1.56 1.7.16C1.27.1.84.23.52.5.19.78 0 1.2 0 1.61v17.56c0 .45.38.83.83.83h2.71v-4.38c0-.8.65-1.45 1.46-1.45h2.08c.81 0 1.46.65 1.46 1.46V20h3.54V3c0-.72-.51-1.32-1.22-1.44ZM4.58 12.29H3.33a.63.63 0 0 1 0-1.25h1.25a.63.63 0 0 1 0 1.25ZM3.33 9.8h1.25a.63.63 0 0 0 0-1.25H3.33a.63.63 0 0 0 0 1.25Zm1.25-2.5H3.33a.63.63 0 0 1 0-1.25h1.25a.63.63 0 0 1 0 1.25ZM3.33 4.8h1.25a.63.63 0 0 0 0-1.25H3.33a.63.63 0 0 0 0 1.25Zm5.42 7.5H7.5a.63.63 0 0 1 0-1.25h1.25a.63.63 0 0 1 0 1.25ZM7.5 9.8h1.25a.63.63 0 0 0 0-1.25H7.5a.63.63 0 0 0 0 1.25Zm1.25-2.5H7.5a.63.63 0 0 1 0-1.25h1.25a.63.63 0 0 1 0 1.25ZM7.5 4.8h1.25a.63.63 0 0 0 0-1.25H7.5a.63.63 0 0 0 0 1.25ZM12.92 7.8l5.93 1.24c.68.15 1.15.73 1.15 1.42v8.08c0 .8-.65 1.46-1.46 1.46h-5.62V7.8Zm2.7 9.7h1.26a.63.63 0 0 0 0-1.25h-1.25a.63.63 0 0 0 0 1.25Zm1.26-2.5h-1.25a.63.63 0 0 1 0-1.25h1.24a.63.63 0 0 1 0 1.25Zm-1.25-2.5h1.24a.63.63 0 0 0 0-1.25h-1.25a.63.63 0 0 0 0 1.25Z"
                            fill="#4B6A9B"
                          />
                        </svg>
                        <h3>
                          <a href={user.organizations_url}>
                            {user.organizations_url}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MainTwo;
