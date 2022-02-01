import SocialLink from "../components/contacts/SocialLink";
import Feedback from "../components/contacts/Feedback";
import { GeoAlt, Telephone, Envelope } from "react-bootstrap-icons";
import { fetchContacts } from "../actions/contact";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Contacts() {
  let dispatch = useDispatch();
  let { contacts, loading } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts(dispatch));
  }, [dispatch]);

  let email = contacts.map((contact) => contact.email)[0];
  let phone = contacts.map((contact) => contact.phone)[0];
  let address = contacts.map((contact) => contact.address)[0];

  return (
    <main className="contact-us ">
      <h2 className="contact-us__title">Контакты</h2>
      <section className="contact-us__content">
        <aside className="contact-us__contacts contacts">
          <div className="contacts__list">
            <div className="contacts__contact contact">
              <Envelope size={25} />
              {loading ? (
                <p>Данные загружаются ...</p>
              ) : (
                <a
                  className="contact__link"
                  target="_blank"
                  rel="noreferrer"
                  href={`mailto: ${email}`}
                >
                  {email}
                </a>
              )}
            </div>

            <div className="contacts__contact contact">
              <Telephone size={25} />
              {loading ? (
                <p>Данные загружаются ...</p>
              ) : (
                <a
                  className="contact__link"
                  target="_blank"
                  rel="noreferrer"
                  href={`tel:${phone}`}
                >
                  {phone}
                </a>
              )}
            </div>

            <div className="contacts__contact contact">
              <GeoAlt size={25} />
              {loading ? (
                <p>Данные загружаются ...</p>
              ) : (
                <a
                  className="contact__link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://2gis.kg/bishkek/firm/70000001024730770"
                >
                  {address}
                </a>
              )}
            </div>
          </div>
          <SocialLink />
        </aside>
        <Feedback />
      </section>
    </main>
  );
}
