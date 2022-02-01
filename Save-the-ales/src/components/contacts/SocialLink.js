import React from "react";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

export default function SocialLinks() {
  let contacts = useSelector((state) => state.contacts.contacts);
  let instagram = contacts.map((contact) => contact.instagram)[0];
  let whatsapp = contacts.map((contact) => contact.whatsapp)[0];

  return (
    <>
      <div className="contacts__social social">
        <h4 className="social__title">Следите за нами в социальных сетях</h4>
        <nav className="social__icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/savetheales"
          >
            <Facebook color="#fafdf6" size={30} />
          </a>
          <a target="_blank" rel="noreferrer" href={instagram}>
            <Instagram color="#fafdf6" size={30} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/${whatsapp}`}
          >
            <Whatsapp color="#fafdf6" size={30} />
          </a>
        </nav>
      </div>
    </>
  );
}
