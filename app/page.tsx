import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap bg-stone-300 m-8 shadow-md rounded-md text-stone-800">
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-4">Need rocks?</h1>
          <p className="text-base mb-4">
            Well you are in the right place then. We offer a wide variety of
            rocks and minerals for all your construction and landscaping needs.
            Whether you&apos;re looking for gravel, sandstone, or marble,
            we&apos;ve got you covered.
          </p>
          <p className="text-base mb-4">
            Our extensive inventory ensures that you will find exactly what you
            need for your project. Our team of experts is always available to
            provide guidance and support to help you make the best choice.
          </p>
          <p className="text-base">
            Feel free to reach out to us with any questions or to place an
            order. We pride ourselves on our exceptional customer service and
            quick turnaround times. Let&apos;s build something great together!
          </p>
        </div>
        <div className="p-4 flex-shrink-0 relative h-full max-w-full" >
          <Image
            className="rounded-md"
            src="/images/rocks.jpg"
            alt="Rocks"
            width={480}
            height={640}
          />
        </div>
      </div>

      <div className="flex flex-wrap bg-stone-300 mx-8 mb-8 shadow-md rounded-md text-stone-800">
        <div className="p-4 flex-shrink-0 h-full max-w-full">
          <Image
            className="rounded-md"
            src="/images/construction.jpg"
            alt="Construction"
            width={480}
            height={640}
          />
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-4">Our Quality Promise</h1>
          <p className="text-base mb-4">
            Quality is our hallmark. We go to great lengths to source the finest
            rocks and minerals, ensuring every piece meets our rigorous
            standards. Whether you need materials for landscaping, construction,
            or artistic projects, you can trust us to deliver exceptional
            quality every time.
          </p>
          <p className="text-base mb-4">
            Our knowledgeable staff is passionate about what they do and are
            always ready to help you select the best products for your needs. We
            believe in building lasting relationships with our customers by
            providing not only great products but also unmatched service and
            support.
          </p>
          <p className="text-base">
            Discover the difference that quality makes. From start to finish,
            we&apos;re committed to helping you achieve your goals with the best
            materials available. Reach out to us today and let us be part of
            your next big project!
          </p>
        </div>
      </div>

      <div className="bg-stone-300 m-8 shadow-md rounded-md text-stone-800">
        <h1 className="text-3xl font-bold mb-4 text-center p-4">Pricing</h1>
        <div className="flex flex-wrap justify-between">
          <div className="flex-1 m-4 p-4 bg-stone-100 rounded-md">
            <h2 className="text-2xl font-bold mb-2">Gravel</h2>
            <ul className="list-disc list-inside">
              <li className="text-base mb-2">Starting from $50 per ton</li>
              <li className="text-base mb-2">Bulk pricing available</li>
              <li className="text-base mb-2">Available in various sizes</li>
            </ul>
          </div>
          <div className="flex-1 m-4 p-4 bg-stone-100 rounded-md">
            <h2 className="text-2xl font-bold mb-2">Sandstone</h2>
            <ul className="list-disc list-inside">
              <li className="text-base mb-2">Starting from $70 per ton</li>
              <li className="text-base mb-2">Custom cuts and sizes</li>
              <li className="text-base mb-2">Ideal for paving and walls</li>
            </ul>
          </div>
          <div className="flex-1 m-4 p-4 bg-stone-100 rounded-md">
            <h2 className="text-2xl font-bold mb-2">Marble</h2>
            <ul className="list-disc list-inside">
              <li className="text-base mb-2">Starting from $100 per ton</li>
              <li className="text-base mb-2">Premium quality and finish</li>
              <li className="text-base mb-2">Perfect for countertops</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="flex-1 m-4 p-4 bg-stone-100 rounded-md">
            <h2 className="text-2xl font-bold mb-2">Granite</h2>
            <ul className="list-disc list-inside">
              <li className="text-base mb-2">Starting from $90 per ton</li>
              <li className="text-base mb-2">Available in multiple colors</li>
              <li className="text-base mb-2">Durable and versatile</li>
            </ul>
          </div>
          <div className="flex-1 m-4 p-4 bg-stone-100 rounded-md">
            <h2 className="text-2xl font-bold mb-2">Limestone</h2>
            <ul className="list-disc list-inside">
              <li className="text-base mb-2">Starting from $60 per ton</li>
              <li className="text-base mb-2">Great for building and paving</li>
              <li className="text-base mb-2">Easy to cut and shape</li>
            </ul>
          </div>
          <div className="flex-1 m-4 p-4 bg-stone-100 rounded-md">
            <h2 className="text-2xl font-bold mb-2">Slate</h2>
            <ul className="list-disc list-inside">
              <li className="text-base mb-2">Starting from $80 per ton</li>
              <li className="text-base mb-2">Ideal for roofing and flooring</li>
              <li className="text-base mb-2">Available in various shades</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
