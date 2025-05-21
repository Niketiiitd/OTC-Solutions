import { Card, Image } from "@heroui/react";

export default function Team() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-2 text-[oklch(0.623_0.214_259.815)] text-center">Meet our leadership team</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        {/* Left: Image Card */}
        <div className="flex-shrink-0">
          <Card isFooterBlurred className="border-none" radius="lg">
            <Image
              alt="Leadership"
              className="object-cover"
              height={200}
              width={200}
              src="https://heroui.com/images/hero-card.jpeg"
            />
            {/* Example footer, can be removed if not needed */}
            {/* 
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                color="default"
                radius="lg"
                size="sm"
                variant="flat"
              >
                Notify me
              </Button>
            </CardFooter>
            */}
          </Card>
        </div>
        {/* Right: Content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-[oklch(0.623_0.214_259.815)]">Jane Doe</h3>
          <p className="text-base text-gray-700 mb-2">
            Jane Doe is the CEO and founder of OTC Solutions. With over 20 years of experience in the industry, she leads the team with a vision for innovation and excellence.
          </p>
          <p className="text-base text-gray-700">
            Her leadership ensures that the company delivers top-notch solutions and maintains a client-first approach in all projects.
          </p>
        </div>
      </div>
    </div>
  );
}