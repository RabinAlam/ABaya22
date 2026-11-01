import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About ABAYA</h1>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p className="mb-4">
            At ABAYA, we celebrate the beauty of modest fashion for Muslim women. Our passion goes beyond creating stunning abayas – we&apos;re dedicated to empowering women through elegant, comfortable, and culturally respectful clothing.
          </p>
          <p className="mb-4">
            Founded with a vision to provide high-quality Muslim women&apos;s clothing, our team combines traditional Islamic values with contemporary design. We understand that each woman&apos;s style is unique, and we&apos;re committed to offering a diverse range of abayas, hijabs, and modest wear to suit every preference.
          </p>
          <p>
            Our eco-friendly practices ensure that we care for both our customers and the environment. We use sustainable materials and ethical production methods to create clothing that you can feel good about wearing.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="ABAYA collection"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-2">Modesty</h3>
            <p>We design clothing that respects Islamic principles while embracing individual style.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium mb-2">Quality</h3>
            <p>Our garments are crafted from premium fabrics to ensure comfort and durability.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium mb-2">Innovation</h3>
            <p>We continuously explore new designs and fabrics to meet the evolving needs of Muslim women.</p>
          </div>
        </div>
      </section>
      
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Join the ABAYA Family</h2>
        <p className="mb-4">Experience the perfect blend of modesty and style. Your wardrobe deserves the best, and we&apos;re here to deliver nothing less.</p>
      </section>
    </div>
  );
}