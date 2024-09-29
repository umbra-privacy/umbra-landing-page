import Image from 'next/image';

export default function Animation() {
  return (
    <div className="py-10 px-4">
      <Image
        src="/animation/animationDemo.gif"
        alt="animation"
        width={1200}
        height={400}
        className="mx-auto"
      />
    </div>
  );
}
