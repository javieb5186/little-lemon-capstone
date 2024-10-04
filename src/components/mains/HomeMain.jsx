import { ReactComponent as Star } from "../../assets/star.svg";

export default function HomeMain() {
  return (
    <main className="sm-mb-20">
      <div className="bg-primary md-h-md">
        <section className="grid grid-cols-1 md-grid-cols-2 md-items-center md-justify-center">
          <article className="text-white flex flex-col justify-around space-y-8 md-text-center md-items-center">
            <div>
              <h1 className="text-secondary text-4xl md-text-6xl">
                Little Lemon
              </h1>
              <h2 className="text-3xl md-text-4xl">Chicago</h2>
            </div>
            <h4>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </h4>
            <a
              href="/booking"
              role="button"
              className="px-8 py-4 bg-secondary rounded-2xl w-fit text-lg link-black visited-black"
            >
              Reserve a table
            </a>
          </article>
          <div className="relative md-pt-8">
            <div className="md-absolute right-0 md-text-center">
              <img
                src="/images/restaurantfood.jpg"
                alt="restaurant food"
                width={300}
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="space-y-12">
        <div className="md-pt-24 flex flex-col gap-y-4 justify-between md-flex-row">
          <h2 className="text-3xl md-text-4xl">This weeks specials</h2>
          <button className="text-lg px-8 py-4 bg-secondary rounded-2xl border-none w-max">
            Online Menu
          </button>
        </div>
        <ul className="flex gap-x-4 flex-wrap justify-center gap-4">
          <li className="w-72 bg-light rounded-2xl overflow-hidden">
            <div>
              <img
                src="/images/greek-salad.jpg"
                alt="Greek Salad"
                className="w-full md-h-44 object-cover"
              />
              <div className="px-4 space-y-4 py-4">
                <div className="flex justify-between items-center">
                  <h6 className="text-lg">Greek Salad</h6>
                  <p className="text-primary">$12.99</p>
                </div>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <button className="pr-4 py-4 border-none">
                  <span>Order a delivery</span>
                </button>
              </div>
            </div>
          </li>
          <li className="w-72 bg-light rounded-2xl overflow-hidden">
            <div>
              <img
                src="/images/bruchetta.jpeg"
                alt="Bruchetta"
                className="w-full md-h-44 object-cover"
              />
              <div className="px-4 space-y-4 py-4">
                <div className="flex justify-between items-center">
                  <h6 className="text-lg">Bruchetta</h6>
                  <p className="text-primary">$5.99</p>
                </div>
                <p>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <button className="py-4 pr-4 border-none">
                  <span>Order a delivery</span>
                </button>
              </div>
            </div>
          </li>
          <li className="w-72 bg-light rounded-2xl overflow-hidden">
            <div>
              <img
                src="/images/lemon-dessert.jpg"
                alt="Lemon Dessert"
                className="w-full md-h-44 object-cover"
              />
              <div className="px-4 py-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h6 className="text-lg">Lemon Dessert</h6>
                  <p className="text-primary">$4.99</p>
                </div>
                <p>
                  This comes straight from grandma&apos;s recipe book, every
                  last ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <button className="py-4 pr-4 border-none">
                  <span>Order a delivery</span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <div className="bg-tertiary py-4 min-h-md">
        <section className="space-y-8">
          <h3 className="text-center text-3xl md-text-4xl">Testimonials</h3>
          <ul className="flex flex-wrap gap-4 items-center justify-center">
            <li className="w-48 h-48 py-4 px-4 bg-white">
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src="/images/person3.jpg"
                    alt="Jills testimonial"
                    width={50}
                  />
                  <h6 className="mx-auto text-base">Jill</h6>
                </div>
                <div className="flex">
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                </div>
                <p>Absolutely Delicious and feels very clean.</p>
              </div>
            </li>
            <li className="w-48 h-48 py-4 px-4 bg-white">
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src="/images/person1.jpg"
                    alt="Jills testimonial"
                    width={50}
                  />
                  <h6 className="mx-auto text-base">Jack</h6>
                </div>
                <div className="flex">
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                </div>
                <p>Great fast, healthy, and tasty food.</p>
              </div>
            </li>
            <li className="w-48 h-48 py-4 px-4 bg-white">
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src="/images/person4.jpg"
                    alt="Jills testimonial"
                    width={50}
                  />
                  <h6 className="mx-auto text-base">Din</h6>
                </div>
                <div className="flex">
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                </div>
                <p>Delivery was excellent and quick.</p>
              </div>
            </li>
            <li className="w-48 h-48 py-4 px-4 bg-white">
              <div className="space-y-4">
                <div className="flex items-center">
                  <img
                    src="/images/person2.jpg"
                    alt="Jills testimonial"
                    width={50}
                  />
                  <h6 className="mx-auto text-base">Katia</h6>
                </div>
                <div className="flex">
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                  <Star className="w-4 h-4" />
                </div>
                <p>Customer service is great and love the atmosphere.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <section className="grid grid-cols-1 md-grid-cols-2 items-center gap-4">
        <article className="space-y-8">
          <div>
            <h3 className="text-3xl md-text-4xl">About</h3>
            <h4 className="text-xl">Little Lemon</h4>
          </div>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-source menu with daily specials.
          </p>
        </article>
        <div className="relative h-96 w-full max-w-96 mx-auto md-ml-auto">
          <div className="absolute top-20 left-0">
            <img
              src="/images/restaurant-chef.jpg"
              alt="Adrian, one of the owners, is sprinkling spices onto food joyfully"
              className="w-44 h-64 sm-w-60 sm-h-96 object-cover"
            />
          </div>
          <div className="absolute top-0 right-0">
            <img
              src="/images/owners.jpg"
              alt="Mario and Adrian, both owners, are experimenting with new upcoming food for the public."
              className="w-44 h-64 sm-w-60 sm-h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
