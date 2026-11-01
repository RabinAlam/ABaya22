import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to ABAYA</h1>
        <p className="text-xl mb-8">Exquisite Muslim Women&apos;s Clothing and Care Services</p>
        <Button asChild size="lg">
          <Link href="/services">Explore Our Collection</Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Choose ABAYA?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Authentic and stylish abaya designs</li>
            <li>High-quality, breathable fabrics</li>
            <li>Modest fashion for every occasion</li>
            <li>Expert care and maintenance services</li>
          </ul>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="https://images.unsplash.com/photo-1611509533315-c5e1f8d9d8e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Elegant abaya collection"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">Our Commitment</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-2">1. Modesty</h3>
            <p>Designs that respect and celebrate Islamic values</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">2. Quality</h3>
            <p>Premium fabrics and expert craftsmanship</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">3. Care</h3>
            <p>Specialized cleaning and maintenance services</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Elevate Your Wardrobe</h2>
        <p className="mb-8">Discover the perfect blend of tradition and style with ABAYA</p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us Now</Link>
        </Button>
      </section>
    </div>
  );
}