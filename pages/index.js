import Link from "next/link";

import Stripe from "stripe";
const stripe = Stripe("pk_test_2HB3uwMS4qm4iMSWVF4Hkw7000IpDK2hIu");

const customer = stripe.products.get().then(res => {
  console.log(res);
});

export default async () => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);
