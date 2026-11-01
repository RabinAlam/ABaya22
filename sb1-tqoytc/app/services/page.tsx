import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Custom Abaya Design",
    description: "Personalized abaya creations tailored to your style and preferences.",
    price: "Starting at $150"
  },
  {
    title: "Hijab Styling",
    description: "Expert hijab styling services for various occasions.",
    price: "Starting at $30 per session"
  },
  {
    title: "Abaya Alterations",
    description: "Professional alterations to ensure your abayas fit perfectly.",
    price: "Starting at $25 per alteration"
  },
  {
    title: "Eco-Friendly Abaya Cleaning",
    description: "Gentle, environmentally conscious cleaning for your abayas and hijabs.",
    price: "Starting at $20 per item"
  },
  {
    title: "Embroidery & Embellishments",
    description: "Add unique touches to your abayas with our embroidery services.",
    price: "Starting at $50 per design"
  },
  {
    title: "Modest Swimwear",
    description: "Stylish and comfortable burkini options for modest swimmers.",
    price: "Starting at $80 per set"
  }
];

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <p className="text-xl mb-12 text-center">Discover our range of Muslim women&apos;s clothing and care services</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{service.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}