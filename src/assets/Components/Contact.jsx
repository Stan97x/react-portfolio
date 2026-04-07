import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import bgGif from "../images/true.gif";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_0y2vgwu",
        "template_fqa3lxc",
        form.current,
        "Zzw7bV43P5gAoULFs",
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-center bg-cover"
      id="contact"
      style={{ backgroundImage: `url(${bgGif})` }}
    >
      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 py-20 text-white">
        {/* TITLE */}
        <div className="text-center mb-12">
          <p className="text-gray-400 tracking-widest text-sm mb-2">CONTACT</p>
          <h2 className="text-4xl font-bold text-blue-500">Me contacter</h2>
        </div>

        {/* FORM CARD */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto flex flex-col gap-6 p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
        >
          {/* NAME */}
          <input
            type="text"
            name="user_name"
            placeholder="Votre nom"
            required
            className="p-3 rounded bg-black/40 border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            required
            className="p-3 rounded bg-black/40 border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Votre message"
            required
            rows="5"
            className="p-3 rounded bg-black/40 border border-gray-600 focus:outline-none focus:border-blue-500"
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-blue-500 py-3 rounded-full hover:bg-blue-600 transition font-semibold"
          >
            Envoyer
          </button>

          {/* STATUS */}
          {status === "loading" && (
            <p className="text-center text-gray-300">Envoi en cours...</p>
          )}
          {status === "success" && (
            <p className="text-green-400 text-center">Message envoyé ✅</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">
              Une erreur est survenue ❌
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
