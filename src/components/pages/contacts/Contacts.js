import contactArray from '../../../entities/contactArray'
import ContactInfo from '../shared/contact/ContactInfo'
import RegisterForm from "../home/RegisterForm";
export default function Contacts() {

  return (
    <main className="flex px-5 py-5 flex-col items-center">
      <div className="grid mid:grid-cols-3 w-full lg:w-[auto] grid-cols-1 gap-[15px] items-center justify-items-center">
        {contactArray.map(({ id, color, title, description, Icon }) => (
          <ContactInfo
            key={id}
            color={color}
            title={title}
            description={description}
            Icon={Icon}
          />
        ))}
      </div>
      <div className="flex mt-20 flex-col items-center flex-wrap justify-center">
        <h1 className="text-[22px] pb-5 sm:w-[70%] w-[100%] text-center font-roboto-slab font-bold text-primaryDark">
          Fill the form below so we can get to know you and your needs better.
        </h1>
        <RegisterForm/>
      </div>
    </main>
  )
}
