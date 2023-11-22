import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images"
import Button from "../Components/Button";


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span> Offer
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6l lg:max-w-lg info-text">
         Navigate a realm of posibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={ arrowRight} />

          <Button label="Learn More" 
          backgroundColor ="bg-white"
          borderColor ="text-slate-gray"/>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer