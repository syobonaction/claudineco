import Product from './Product'

export default function Products() {
    return (
        <div className="mb-32 grid place-content-center lg:grid-cols-4 lg:text-left">
          <Product
            href="https://calendly.com/claudineco"
            name="Book an Appointment"
            content="Discuss your specific needs to receive personalized guidance and support."
            target="_blank"
          />
          <Product
            href="#services"
            name="Services"
            content="Our consultancy provides a range of services to assist you w/ visa & immigration needs."
          />
          <Product
            href="#form"
            name="Customized Service"
            content="We understand that each client's needs are unique, which is why we offer customized services tailored to each indivisual's sepecific circumstances."
          />
          <Product
            href="#testimonials"
            name="Testimonials"
            content="Find in-depth information about Next.js features and API."
          />
        </div>
    )
}