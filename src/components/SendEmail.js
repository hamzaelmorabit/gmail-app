import React from "react";
import CloseRounded from "@material-ui/icons/CloseRounded";
import "./../styles/SendEmail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendEmail } from "./../features/emailSlice";
import { db, storage } from "../firebase";
import firebase from "firebase";

export default function SendEmail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("data", data);
    db.collection("emails").add({
      to: data.reciever,
      subject: data.object,
      message: data.message,
      timesTamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendEmail());
  };

  return (
    <div className="SendEmail">
      <header className="SendEmail_header">
        <div>
          <h4>Email Send</h4>
        </div>
        <div>
          <CloseRounded
            onClick={() => dispatch(closeSendEmail())}
            style={{
              cursor: "pointer",
              color: "gray",
            }}
          />
        </div>
      </header>
      <main>
        <section className="SendEmail_main">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="To"
              type="email"
              {...register("reciever", { required: true })}
              name="reciever"
              id="reciever"
            />
            {errors.reciever && <p className="error">To is Required</p>}
            <input
              placeholder="Object"
              type="text"
              name="object"
              id="object"
              {...register("object", { required: true })}
            />
            {errors.object && <p className="error">Subject is Required</p>}

            <textarea
              placeholder="Message"
              name="  message"
              {...register("message", { required: true })}
              id="message"
              cols="2"
              rows="14"
            ></textarea>
            {errors.message && <p className="error">Message is Required</p>}

            <div className="footer_send">
              <input type="submit" value="Send" />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
