import { useState } from "react";
import { useUser, useFetch } from "@gadgetinc/react";
import reactLogo from "../assets/react-logo.svg";

export default function () {
  const user = useUser();

  const [message, setMessage] = useState("");
  const [{ data: chatResponse, fetching: fetchingChat }, sendMessage] = useFetch("/chat", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    stream: "string",
  });

  const submitChat = () => {
    void sendMessage({
      body: JSON.stringify({
        message
      })
    })
  }

  return user ? (
    <>
      <div className="app-link">
        <img src={reactLogo} className="app-logo" alt="logo" />
        <span>You are now signed into {process.env.GADGET_PUBLIC_APP_SLUG} </span>
      </div>
      <div>
        <p className="description" style={{ width: "100%" }}>
          Start building your app&apos;s signed in area
        </p>
        <a href="/edit/files/frontend/routes/signed-in.jsx" target="_blank" rel="noreferrer" style={{ fontWeight: 500 }}>
          frontend/routes/signed-in.jsx
        </a>
      </div>
      <div className="card-stack">
        <div className="card">
          <div className="card-content">
            <img className="icon" src={user.googleImageUrl} />
            <div className="userData">
              <p>id: {user.id}</p>
              <p>
                name: {user.firstName} {user.lastName}
              </p>
              <p>
                email: <a href={`mailto:${user.email}`}>{user.email}</a>
              </p>
              <p>created: {user.createdAt}</p>
            </div>
          </div>
          <div className="sm-description">This data is fetched from the user model</div>
        </div>
        <div className="card">
          <p className="description">
            Your app has a connection to OpenAI and can chat with GPT.
          </p>
          <div style={{ display: "flex"}}>
            <input
              style={{ display: "flex", flex: 1 }}
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  submitChat();
                }
              }}
            /> 
            <button onClick={submitChat}>
              Say hello
            </button>
          </div>
          {!fetchingChat && chatResponse && (
            <p className="description">
              {chatResponse}
            </p>
          )}
        </div>
      </div>
    </>
  ) : null;
}
