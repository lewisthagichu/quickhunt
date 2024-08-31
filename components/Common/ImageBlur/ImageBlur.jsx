import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

export default async function ImageBlur({
  src,
  fill = true,
  sizes = '100vw',
  alt = 'image',
}) {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      fill={fill}
      sizes={sizes}
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
