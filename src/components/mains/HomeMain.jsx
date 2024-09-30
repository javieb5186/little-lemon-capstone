export default function HomeMain() {
  return (
    <main>
      <section>
        <article>
          <h1>
            Little Lemon <span>Chicago</span>
          </h1>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a href="/reserve" role="button">
            Reserve a table
          </a>
        </article>
        <img
          src="/images/restaurantfood.jpg"
          alt="restaurant food"
          width={200}
        />
      </section>
      <section>
        <h2>This weeks specials</h2>
        <button>Online Menu</button>
        <ul>
          <li>
            <div>
              <img
                src="/images/greek-salad.jpg"
                alt="Greek Salad"
                width={100}
              />
              <div>
                <h6>Greek Salad</h6>
                <p>$12.99</p>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button>
                <span>Order a delivery</span>
              </button>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/bruchetta.jpeg" alt="Bruchetta" width={100} />
              <div>
                <h6>Bruchetta</h6>
                <p>$5.99</p>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <button>
                <span>Order a delivery</span>
              </button>
            </div>
          </li>
          <li>
            <div>
              <img
                src="/images/lemon-dessert.jpg"
                alt="Lemon Dessert"
                width={100}
              />
              <div>
                <h6>Lemon Dessert</h6>
                <p>$4.99</p>
              </div>
              <p>
                This comes straight from grandma&apos;s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <button>
                <span>Order a delivery</span>
              </button>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>Testimonials</h3>
        <ul>
          <li>
            <div>
              <div>
                <img
                  src="/images/person3.jpg"
                  alt="Jills testimonial"
                  width={50}
                />
                <h6>Jill</h6>
              </div>
              <p>Absolutely Delicious and feels very clean.</p>
            </div>
          </li>
          <li>
            <div>
              <div>
                <img
                  src="/images/person1.jpg"
                  alt="Jacks testimonial"
                  width={50}
                />
                <h6>Jack</h6>
              </div>
              <p>Great fast, healthy, and tasty food.</p>
            </div>
          </li>
          <li>
            <div>
              <div>
                <img
                  src="/images/person4.jpg"
                  alt="Dins testimonial"
                  width={50}
                />
                <h6>Din</h6>
              </div>
              <p>Delivery was excellent and quick.</p>
            </div>
          </li>
          <li>
            <div>
              <div>
                <img
                  src="/images/person2.jpg"
                  alt="Katies testimonial"
                  width={50}
                />
                <h6>Katie</h6>
              </div>
              <p>Customer service is great and love the atmosphere.</p>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <article>
          <h3>
            About
            <br />
            <span>Little Lemon</span>
          </h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-source menu with daily specials.
          </p>
        </article>
        <div>
          <img
            src="/images/restaurant-chef.jpg"
            alt="Adrian, one of the owners, is sprinkling spices onto food joyfully"
            width={200}
          />
          <img
            src="/images/owners.jpg"
            alt="Mario and Adrian, both owners, are experimenting with new upcoming food for the public."
            width={200}
          />
        </div>
      </section>
    </main>
  );
}
