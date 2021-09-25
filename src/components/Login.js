import { selectLogin, login } from "../features/loginSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { Button } from "@material-ui/core";
export default function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) =>
        dispatch(
          login({
            email: user.email,
            name: user.displayName,
            photoURL: user.photoURL,
          })
        )
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <div className="login__section">
        <div>
          {" "}
          <img
            src="https://logos-marques.com/wp-content/uploads/2021/03/Gmail-Embleme.png"
            alt=""
          />
        </div>
        <div>
          {" "}
          <Button onClick={signIn} color={"primary"} variant="contained">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
